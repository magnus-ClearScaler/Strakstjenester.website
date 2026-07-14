const reasons = [
  {
    title: "Raskt på plass",
    body: "Vi heter Straks av en grunn. Vi svarer raskt og rykker ofte ut samme eller neste dag.",
  },
  {
    title: "Over 20 års erfaring",
    body: "Selskapet ble stiftet i 2022, men folkene bak har mer enn 20 år i bransjen bak seg.",
  },
  {
    title: "Kvalitet og trygghet",
    body: "Registrert aksjeselskap med ansvarsforsikring. Erfarne folk som gjør jobben ordentlig.",
  },
  {
    title: "Riktig levert avfall",
    body: "Vi sorterer og leverer til godkjent mottak. Du slipper turene til gjenvinningsstasjonen.",
  },
  {
    title: "15 % på første oppdrag",
    body: "Som ny kunde får du 15 % rabatt på din første tjeneste hos oss. Ingen bindinger.",
  },
  {
    title: "Fast partner for bedrifter",
    body: "Lang erfaring med håndverkere og entreprenører på større prosjekter.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-ink-950 py-14 sm:py-16">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="eyebrow-light">Hvorfor velge oss?</p>
            <h2 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl">
              Folk som møter opp,
              <br />
              og gjør det de sier.
            </h2>
          </div>
          <p className="self-end text-lg leading-relaxed text-white/55">
            Vi vet at du har hørt løfter før. Derfor holder vi det enkelt: du
            får en fast pris, en avtalt tid, og folk som faktisk dukker opp.
          </p>
        </div>

        <ul className="mt-10 grid gap-x-12 gap-y-px sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <li
              key={r.title}
              className="border-t border-hairline-dark py-8"
            >
              <span className="font-display text-xs font-bold tracking-[0.14em] text-brand-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                {r.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                {r.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
