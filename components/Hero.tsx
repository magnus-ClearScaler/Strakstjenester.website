import Image from "next/image";
import { site, facts } from "@/lib/site";
import { PhoneIcon, ArrowIcon } from "./Icons";

/**
 * Helflate heltebilde med teksten oppå.
 * Merk: bildelaget må ligge på z-0, ikke negativ z – seksjonen har en
 * ugjennomsiktig bakgrunn, og et negativt z-lag havner bak den og blir usynlig.
 */
export default function Hero() {
  return (
    <>
      <section className="relative flex min-h-[38rem] items-end overflow-hidden bg-ink-950 pt-20 lg:min-h-[44rem]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bilder/hero-riving.webp"
            alt="Håndverker fra Straks Tjenester river en innervegg"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradientene sikrer at teksten holder AA-kontrast mot bildet */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-ink-950/60" />
        </div>

        <div className="container-x relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow-light">{site.experience} · Oslo og omegn</p>

            <h1 className="mt-6 max-w-[14ch] text-5xl font-extrabold text-white sm:text-6xl xl:text-7xl">
              Vi river, rydder og kjører bort avfallet.{" "}
              <span className="text-white/40">Straks.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/75">
              Avfallshåndtering, riving og rydding i Oslo og omegn. Vi rykker ut
              raskt, tar hele jobben og leverer avfallet til godkjent mottak.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
        </div>
      </section>

      {/* Nøkkeltall */}
      <section className="bg-sand">
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
