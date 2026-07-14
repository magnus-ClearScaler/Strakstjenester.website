import { site } from "@/lib/site";
import { PhoneIcon, ArrowIcon } from "./Icons";

const steps = [
  {
    n: "01",
    title: "Ta kontakt",
    body: "Ring, send e-post eller fyll ut skjemaet. Fortell kort hva du trenger hjelp til – gjerne med et bilde, så treffer vi bedre på pris.",
  },
  {
    n: "02",
    title: "Du får en pris",
    body: "Vi gir deg et konkret og uforpliktende pristilbud. Ingen skjulte tillegg, ingen overraskelser når regningen kommer.",
  },
  {
    n: "03",
    title: "Vi avtaler tid",
    body: "Vi finner et tidspunkt som passer deg. Haster det, kan vi ofte rykke ut samme eller neste dag.",
  },
  {
    n: "04",
    title: "Jobben er gjort",
    body: "Vi utfører oppdraget, rydder etter oss og leverer avfallet til godkjent mottak. Du trenger ikke løfte en finger.",
  },
];

export default function Process() {
  return (
    <section id="prosess" className="scroll-mt-24 bg-sand-dark py-14 sm:py-16">
      <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        {/* Venstre: blir stående mens stegene scrolles forbi */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Slik jobber vi</p>
          <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            Fra telefon
            <br />
            til ferdig jobb.
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink-600">
            Ingen kompliserte prosesser, ingen ventetid på svar. Fire steg, så
            er problemet ditt vårt.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a href="#kontakt" className="group btn-dark">
              Start her
              <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href={site.phone.primary.href} className="btn-outline">
              <PhoneIcon className="size-4" />
              {site.phone.primary.display}
            </a>
          </div>
        </div>

        {/* Høyre: stegene som en redaksjonell liste, ikke fire like bokser */}
        <ol>
          {steps.map((step) => (
            <li
              key={step.n}
              className="group grid grid-cols-[3.5rem_1fr] items-start gap-5 border-t border-ink-950/10 py-8 sm:grid-cols-[5rem_1fr] sm:gap-8"
            >
              {/* Rent dekorativt: rekkefølgen ligger allerede i <ol>. Skjules
                  for skjermlesere, og holdes utenfor kontrastkravet. */}
              <span
                aria-hidden
                className="font-display text-4xl font-extrabold leading-none text-ink-950/50 transition-colors duration-300 group-hover:text-brand-700 sm:text-5xl"
              >
                {step.n}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-md leading-relaxed text-ink-600">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
