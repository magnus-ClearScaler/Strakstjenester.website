import Image from "next/image";
import { site, facts } from "@/lib/site";
import { PhoneIcon, ArrowIcon } from "./Icons";

/**
 * Delt hero: tekst på mørk flate, bildet i egen firkant.
 * Heltebildet er en stor hvit lastebilkasse – tekst kan ikke ligge oppå den
 * uten å bli uleselig. Derfor får bildet sin egen flate ved siden av teksten.
 */
export default function Hero() {
  return (
    <>
      <section className="bg-ink-950 pt-20">
        <div className="container-x grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16 lg:py-28">
          <div>
            <p className="eyebrow-light">
              {site.experience} · Oslo og omegn
            </p>

            {/* Ingen harde linjeskift – de kolliderte med kolonnebredden og
                ga stygg ombrekking. Lar teksten flyte og styrer med maks-bredde. */}
            <h1 className="mt-7 max-w-[13ch] text-5xl font-extrabold text-white sm:text-6xl">
              Vi rydder, frakter og kjører bort.{" "}
              <span className="text-white/35">Straks.</span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/60">
              Transport, riving, rengjøring og avfallshåndtering i Oslo og
              omegn. Vi rykker ut raskt, gjør jobben ordentlig og etterlater det
              ryddig.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#kontakt" className="group btn-brand">
                Få gratis pristilbud
                <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href={site.phone.primary.href} className="btn-outline-light">
                <PhoneIcon className="size-4" />
                {site.phone.primary.display}
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-edge lg:aspect-[5/4]">
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
        </div>
      </section>

      {/* Nøkkeltall – tynne skillelinjer, ingen kort */}
      <section className="border-b border-hairline bg-sand">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`border-hairline py-8 pr-6 ${
                i > 0 ? "lg:border-l lg:pl-8" : ""
              } ${i === 1 ? "border-l pl-6 lg:pl-8" : ""} ${
                i < 2 ? "border-b lg:border-b-0" : ""
              } ${i === 3 ? "border-l pl-6 lg:pl-8" : ""} ${
                i === 2 ? "lg:pl-8" : ""
              }`}
            >
              <p className="font-display text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
                {f.value}
              </p>
              <p className="mt-1.5 text-sm text-ink-600">{f.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
