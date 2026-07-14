"use client";

import { useState } from "react";
import { services } from "@/lib/site";
import { ArrowIcon, CheckIcon } from "./Icons";

type Status = "idle" | "sender" | "ok" | "feil";

const field =
  "w-full rounded-edge border border-hairline bg-sand px-4 py-3.5 text-ink-950 placeholder:text-ink-400 transition-colors focus:border-ink-950 focus:outline-none";

const label =
  "block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sender");
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Kunne ikke sende meldingen.");
      }

      setStatus("ok");

      // Konverteringssignal for Google Ads / Meta Pixel (via GTM dataLayer).
      type WithDataLayer = Window & { dataLayer?: Record<string, unknown>[] };
      const w = window as WithDataLayer;
      w.dataLayer = w.dataLayer ?? [];
      w.dataLayer.push({ event: "lead_sendt", skjema: "kontakt" });
    } catch (err) {
      setStatus("feil");
      setError(
        err instanceof Error
          ? err.message
          : "Noe gikk galt. Ring oss gjerne i stedet.",
      );
    }
  }

  if (status === "ok") {
    return (
      <div className="flex min-h-[30rem] flex-col items-center justify-center rounded-edge bg-white p-10 text-center">
        <CheckIcon className="size-10 text-brand-700" />
        <h3 className="mt-6 font-display text-2xl font-bold">
          Takk for henvendelsen!
        </h3>
        <p className="mt-3 max-w-sm text-ink-600">
          Vi har mottatt meldingen din og tar kontakt så raskt vi kan – som
          regel innen 24 timer.
        </p>
        <p className="mt-6 text-sm text-ink-500">
          Haster det?{" "}
          <a
            href="tel:+4797473951"
            className="font-bold text-brand-700 underline-offset-4 hover:underline"
          >
            Ring 97 47 39 51
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-edge bg-white p-7 sm:p-9"
    >
      <p className="eyebrow">Be om pristilbud</p>
      <h3 className="mt-3 font-display text-2xl font-bold">
        Helt uforpliktende.
      </h3>

      {/* Honningkrukke – skjult for mennesker, fanger opp roboter */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="firma">Ikke fyll ut dette feltet</label>
        <input id="firma" name="firma" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="navn" className={label}>
            Navn <span className="text-brand-700">*</span>
          </label>
          <input
            id="navn"
            name="navn"
            type="text"
            required
            autoComplete="name"
            placeholder="Ola Nordmann"
            className={`mt-2.5 ${field}`}
          />
        </div>

        <div>
          <label htmlFor="telefon" className={label}>
            Telefon <span className="text-brand-700">*</span>
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="900 00 000"
            className={`mt-2.5 ${field}`}
          />
        </div>

        <div>
          <label htmlFor="epost" className={label}>
            E-post <span className="text-brand-700">*</span>
          </label>
          <input
            id="epost"
            name="epost"
            type="email"
            required
            autoComplete="email"
            placeholder="ola@example.no"
            className={`mt-2.5 ${field}`}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="tjeneste" className={label}>
            Hva trenger du hjelp til?
          </label>
          <select
            id="tjeneste"
            name="tjeneste"
            defaultValue=""
            className={`mt-2.5 appearance-none bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat ${field}`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Velg tjeneste (valgfritt)</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Annet">Annet</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="melding" className={label}>
            Melding
          </label>
          <textarea
            id="melding"
            name="melding"
            rows={4}
            placeholder="Fortell kort hva du trenger hjelp til, og gjerne hvor du bor."
            className={`mt-2.5 resize-y ${field}`}
          />
        </div>
      </div>

      {status === "feil" && (
        <p
          role="alert"
          className="mt-6 rounded-edge border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {error} Du kan også ringe oss på{" "}
          <a href="tel:+4797473951" className="font-bold underline">
            97 47 39 51
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sender"}
        className="group btn-brand mt-8 w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sender" ? "Sender …" : "Send forespørsel"}
        {status !== "sender" && (
          <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
        )}
      </button>

      <p className="mt-5 text-center text-xs leading-relaxed text-ink-500">
        Ved å sende inn samtykker du til at vi kan kontakte deg om
        forespørselen. Vi deler aldri opplysningene dine med andre.
      </p>
    </form>
  );
}
