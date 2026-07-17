import Image from "next/image";
import { site, facts } from "@/lib/site";
import { PhoneIcon, ArrowIcon, RecycleIcon } from "./Icons";

/**
 * Bakgrunnsvideo med teksten oppå.
 *
 * Videoen er lys – hvit bilkasse og sol – så teksten trenger et solid slør for
 * å være lesbar. Sløret er sterkest til venstre der teksten står, og slipper
 * opp mot høyre slik at bilen og folkene fortsatt kommer tydelig fram.
 *
 * Videoen er klippet fram-og-tilbake i ffmpeg, så den løkker sømløst uten
 * hopp. Den har ingen lyd, og er skjult ved «prefers-reduced-motion» – da
 * står plakatbildet igjen som stillbilde.
 */
export default function Hero() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-950 pt-20">
        <div className="absolute inset-0 -z-10">
          {/* Stillbilde: males med én gang, og blir stående ved redusert bevegelse. */}
          <Image
            src="/bilder/hero-video-poster.jpg"
            alt="Lastebilen til Straks Tjenester klar for bortkjøring av avfall i Oslo"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />

          <video
            className="hero-video absolute inset-0 size-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/bilder/hero-video-poster.jpg"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>

          {/* Slør: jevn demping, så en tyngre vegg bak teksten. */}
          <div className="absolute inset-0 bg-ink-950/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/25 lg:via-ink-950/70 lg:to-transparent" />
          {/* Toppen mørknes så menylinjen holder seg lesbar. */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950/90 to-transparent" />
          {/* Bunnen mørknes mot nøkkeltall-stripen. */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950/70 to-transparent" />
        </div>

        <div className="container-x relative z-10 flex min-h-[34rem] items-center py-16 lg:min-h-[40rem] lg:py-24">
          <div className="max-w-xl">
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
