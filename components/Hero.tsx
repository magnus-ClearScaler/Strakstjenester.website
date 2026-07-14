import Image from "next/image";
import { site } from "@/lib/site";
import { PhoneIcon, ArrowIcon, CheckIcon, SparkleIcon, ClockIcon } from "./Icons";

const points = [
  "Uforpliktende pristilbud",
  "Ofte ute samme dag",
  "Vi kjører bort og sorterer alt",
];

/**
 * Delt hero: tekst på mørk flate, bildet i eget kort.
 * Heltebildet er en stor hvit lastebilkasse – tekst kan ikke ligge oppå den
 * uten å bli uleselig. Derfor får bildet sin egen flate ved siden av teksten.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-20">
      {/* Diskret merkevareglød i bakgrunnen */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 size-[38rem] rounded-full bg-brand-500/10 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:py-24">
        {/* Tekst */}
        <div>
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-300 sm:text-sm">
            <SparkleIcon className="size-4" />
            {site.offer}
          </p>

          <h1 className="animate-fade-up mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-6xl">
            Vi rydder, frakter og kjører bort
            <span className="text-brand-500"> – straks.</span>
          </h1>

          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Transport, riving, rengjøring og avfallshåndtering i Oslo og omegn.
            Vi rykker ut raskt, gjør jobben ordentlig og etterlater det ryddig.
          </p>

          <div className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-4 text-base font-semibold text-white shadow-lift-lg transition-all hover:bg-brand-800"
            >
              Få gratis pristilbud
              <ArrowIcon className="size-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.phone.primary.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <PhoneIcon className="size-5" />
              {site.phone.primary.display}
            </a>
          </div>

          <ul className="animate-fade-up mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2 text-sm font-medium text-white/60"
              >
                <CheckIcon className="size-4 shrink-0 text-brand-500" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Bilde */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-lift-lg lg:aspect-[5/4]">
            <Image
              src="/bilder/hero-transport.webp"
              alt="Lastebil fra Straks Tjenester klar for oppdrag i Oslo"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Flytende tillitskort */}
          <div className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/95 px-5 py-4 shadow-lift-lg backdrop-blur-sm sm:-left-5">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
              <ClockIcon className="size-5" />
            </span>
            <span>
              <span className="block font-display text-sm font-bold text-white">
                Rask utrykning
              </span>
              <span className="block text-xs text-white/60">
                Ofte på plass samme dag
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
