const steps = [
  {
    n: "01",
    title: "Ta kontakt",
    body: "Ring, send e-post eller fyll ut skjemaet. Fortell kort hva du trenger hjelp til – gjerne med et bilde.",
  },
  {
    n: "02",
    title: "Du får en pris",
    body: "Vi gir deg et konkret og uforpliktende pristilbud. Ingen skjulte tillegg, ingen overraskelser.",
  },
  {
    n: "03",
    title: "Vi avtaler tid",
    body: "Vi finner et tidspunkt som passer deg. Haster det, kan vi ofte rykke ut samme eller neste dag.",
  },
  {
    n: "04",
    title: "Jobben er gjort",
    body: "Vi utfører oppdraget, rydder etter oss og leverer avfallet til godkjent mottak. Du er ferdig.",
  },
];

export default function Process() {
  return (
    <section id="prosess" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-6 bg-brand-500" />
            Slik jobber vi
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Fra telefon til ferdig jobb
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Ingen kompliserte prosesser. Fire enkle steg, så er problemet ditt
            vårt.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Forbindelseslinje på store skjermer */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-brand-200 via-brand-300 to-transparent lg:block"
          />

          {steps.map((step) => (
            <li key={step.n} className="relative">
              <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-full border border-brand-200 bg-brand-50 font-display text-sm font-extrabold text-brand-800">
                {step.n}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
