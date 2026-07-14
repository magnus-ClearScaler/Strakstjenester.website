"use client";

import { useState } from "react";
import { services } from "@/lib/site";
import { ArrowIcon, CheckIcon } from "./Icons";

type Status = "idle" | "sender" | "ok" | "feil";

const field =
  "w-full rounded-xl border border-hairline bg-white px-4 py-3.5 text-ink-900 placeholder:text-ink-500/60 transition-colors focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10";

const label = "block text-sm font-semibold text-ink-900";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

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
      <div className="flex h-full min-h-[28rem] flex-col items-center justify-center rounded-card border border-hairline bg-white p-10 text-center shadow-lift">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-brand-50 text-brand-800">
          <CheckIcon className="size-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold">
          Takk for henvendelsen!
        </h3>
        <p className="mt-3 max-w-sm text-ink-500">
          Vi har mottatt meldingen din og tar kontakt så raskt vi kan – som
          regel innen 24 timer.
        </p>
        <p className="mt-6 text-sm text-ink-500">
          Haster det?{" "}
          <a
            href="tel:+4797473951"
            className="font-semibold text-brand-700 underline-offset-4 hover:underline"
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
      className="rounded-card border border-hairline bg-white p-6 shadow-lift sm:p-8"
    >
      <h3 className="font-display text-2xl font-bold">Be om pristilbud</h3>
      <p className="mt-2 text-sm text-ink-500">
        Fyll ut skjemaet, så tar vi kontakt. Helt uforpliktende.
      </p>

      {/* Honningkrukke – skjult for mennesker, fanger opp roboter */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="firma">Ikke fyll ut dette feltet</label>
        <input id="firma" name="firma" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="navn" className={label}>
            Navn <span className="text-brand-800">*</span>
          </label>
          <input
            id="navn"
            name="navn"
            type="text"
            required
            autoComplete="name"
            placeholder="Ola Nordmann"
            className={`mt-2 ${field}`}
          />
        </div>

        <div>
          <label htmlFor="telefon" className={label}>
            Telefon <span className="text-brand-800">*</span>
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="900 00 000"
            className={`mt-2 ${field}`}
          />
        </div>

        <div>
          <label htmlFor="epost" className={label}>
            E-post <span className="text-brand-800">*</span>
          </label>
          <input
            id="epost"
            name="epost"
            type="email"
            required
            autoComplete="email"
            placeholder="ola@example.no"
            className={`mt-2 ${field}`}
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
            className={`mt-2 appearance-none bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat ${field}`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23616161' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
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
            className={`mt-2 resize-y ${field}`}
          />
        </div>
      </div>

      {status === "feil" && (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {error} Du kan også ringe oss på{" "}
          <a href="tel:+4797473951" className="font-semibold underline">
            97 47 39 51
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sender"}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-4 text-base font-semibold text-white shadow-lift transition-all hover:bg-brand-800 hover:shadow-lift-lg disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sender" ? "Sender …" : "Send forespørsel"}
        {status !== "sender" && (
          <ArrowIcon className="size-5 transition-transform group-hover:translate-x-0.5" />
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-ink-500">
        Ved å sende inn samtykker du til at vi kan kontakte deg om
        forespørselen. Vi deler aldri opplysningene dine med andre.
      </p>
    </form>
  );
}
