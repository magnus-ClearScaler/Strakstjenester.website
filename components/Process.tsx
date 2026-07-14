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
    <section
      id="prosess"
      className="scroll-mt-24 border-y border-hairline bg-sand-dark py-14 sm:py-16"
    >
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Slik jobber vi</p>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              Fra telefon
              <br />
              til ferdig jobb.
            </h2>
          </div>
          <p className="self-end text-lg leading-relaxed text-ink-600">
            Ingen kompliserte prosesser. Fire enkle steg, så er problemet ditt
            vårt.
          </p>
        </div>

        <ol className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-ink-950/15 py-8">
              <span className="font-display text-xs font-bold tracking-[0.14em] text-brand-800">
                {step.n}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
