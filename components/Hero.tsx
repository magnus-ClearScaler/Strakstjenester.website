import Image from "next/image";
import { site, facts } from "@/lib/site";
import { PhoneIcon, ArrowIcon, RecycleIcon } from "./Icons";

/**
 * Bilen er heltebildet, og den skal være lys og tydelig.
 *
 * Den kan ikke ligge BAK teksten: bilkassen er en stor hvit flate, og all
 * tekst oppå den blir uleselig med mindre bildet mørklegges kraftig – da
 * forsvinner bilen. Løsningen er å gi bilen sin egen halvdel i full høyde,
 * uten mørkt slør, mens teksten står på en solid mørk flate ved siden av.
 */
export default function Hero() {
  return (
    <>
      <section className="relative bg-ink-950 pt-20">
        {/* Bilen: full høyde, helt ut til høyre kant. Kun en myk overgang
            i venstre kant slik at den smelter inn i den mørke flaten. */}
        <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <Image
            src="/bilder/hero-bil.webp"
            alt="Lastebilen til Straks Tjenester klar for bortkjøring av avfall i Oslo"
            fill
            priority
            fetchPriority="high"
            sizes="52vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-ink-950 to-transparent" />
        </div>

        <div className="container-x relative z-10 grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="eyebrow-light">{site.experience} · Oslo og omegn</p>

            <h1 className="mt-6 max-w-[13ch] text-5xl font-extrabold text-white sm:text-6xl">
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

            <p className="mt-8 flex items-center gap-2.5 text-sm text-white/60">
              <RecycleIcon className="size-5 shrink-0 text-brand-500" />
              Egne biler · vi sorterer og leverer til godkjent mottak
            </p>
          </div>

          {/* Mobil/nettbrett: bilen som eget lyst felt under teksten */}
          <div className="relative -mx-5 aspect-[16/10] sm:-mx-8 lg:hidden">
            <Image
              src="/bilder/hero-bil.webp"
              alt="Lastebilen til Straks Tjenester klar for bortkjøring av avfall i Oslo"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
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
