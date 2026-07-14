import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  navn?: unknown;
  telefon?: unknown;
  epost?: unknown;
  tjeneste?: unknown;
  melding?: unknown;
  firma?: unknown; // honningkrukke
};

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

/** Enkel, beste-innsats rate limit per IP. Nullstilles ved cold start. */
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Hindrer at kartet vokser i det uendelige
  if (hits.size > 5_000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c]!,
  );

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "ukjent";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "For mange forsøk. Vent litt og prøv igjen." },
      { status: 429 },
    );
  }

  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørsel." }, { status: 400 });
  }

  // Bot fylte ut det skjulte feltet – lat som alt gikk bra.
  if (str(body.firma)) {
    return NextResponse.json({ ok: true });
  }

  const navn = str(body.navn);
  const telefon = str(body.telefon);
  const epost = str(body.epost);
  const tjeneste = str(body.tjeneste) || "Ikke oppgitt";
  const melding = str(body.melding) || "(ingen melding)";

  if (!navn || !telefon || !epost) {
    return NextResponse.json(
      { error: "Fyll ut navn, telefon og e-post." },
      { status: 400 },
    );
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(epost)) {
    return NextResponse.json(
      { error: "E-postadressen ser ikke riktig ut." },
      { status: 400 },
    );
  }
  if (navn.length > 100 || epost.length > 150 || melding.length > 3000) {
    return NextResponse.json({ error: "Innholdet er for langt." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Uten nøkkel kan vi ikke levere leadet – si fra i stedet for å miste det.
    console.error("RESEND_API_KEY mangler – kontaktskjema kan ikke sende e-post.");
    return NextResponse.json(
      { error: "Skjemaet er midlertidig ute av drift." },
      { status: 500 },
    );
  }

  const to = process.env.LEAD_TO_EMAIL ?? site.email;
  const from = process.env.LEAD_FROM_EMAIL ?? "onboarding@resend.dev";

  const rows: [string, string][] = [
    ["Navn", navn],
    ["Telefon", telefon],
    ["E-post", epost],
    ["Tjeneste", tjeneste],
  ];

  const html = `
    <div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;color:#202020">
      <div style="background:#f5821f;color:#fff;padding:20px 24px;border-radius:12px 12px 0 0">
        <h1 style="margin:0;font-size:18px">Ny forespørsel fra nettsiden</h1>
      </div>
      <div style="border:1px solid #e7e7e7;border-top:0;border-radius:0 0 12px 12px;padding:24px">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          ${rows
            .map(
              ([k, v]) => `<tr>
                <td style="padding:8px 0;color:#616161;width:110px">${k}</td>
                <td style="padding:8px 0;font-weight:600">${escapeHtml(v)}</td>
              </tr>`,
            )
            .join("")}
        </table>
        <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e7e7e7">
          <p style="margin:0 0 6px;color:#616161;font-size:14px">Melding</p>
          <p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(melding)}</p>
        </div>
        <div style="margin-top:24px">
          <a href="tel:${escapeHtml(telefon.replace(/\s/g, ""))}"
             style="display:inline-block;background:#202020;color:#fff;text-decoration:none;padding:12px 20px;border-radius:999px;font-weight:600;font-size:14px">
            Ring ${escapeHtml(navn)}
          </a>
        </div>
      </div>
    </div>`;

  const text = [
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    `Melding: ${melding}`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Straks Tjenester nettside <${from}>`,
      to: [to],
      replyTo: epost,
      subject: `Ny forespørsel: ${tjeneste} – ${navn}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend-feil:", error);
      return NextResponse.json(
        { error: "Kunne ikke sende meldingen akkurat nå." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Uventet feil i kontaktskjema:", err);
    return NextResponse.json(
      { error: "Kunne ikke sende meldingen akkurat nå." },
      { status: 500 },
    );
  }
}
