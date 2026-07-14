import { site } from "@/lib/site";

/**
 * Faktaseksjon, ikke salgsløfter.
 * Konkrete vilkår kunden kan planlegge og sammenligne etter.
 */
const terms = [
  {
    title: "Fast pris før oppstart",
    body: "Du får et konkret pristilbud basert på omfang, mengde og adkomst. Prisen ligger fast, og arbeidet starter først når tilbudet er godkjent.",
  },
  {
    title: "Levering til godkjent mottak",
    body: "Alt avfall sorteres og leveres til godkjent mottak i tråd med avfallsforskriften. Kvittering på levert avfall kan fremlegges ved behov.",
  },
  {
    title: "Egne biler og mannskap",
    body: "Vi stiller med bil, utstyr og mannskap. Du trenger verken å leie container eller å stå for bortkjøringen selv.",
  },
  {
    title: "Dekningsområde",
    body: `${site.areaServed.slice(0, 5).join(", ")} og resten av Oslo-området. Utrykning ofte samme eller neste virkedag.`,
  },
  {
    title: "Ansvarsforsikret",
    body: `Ansvarsforsikring gjennom hele oppdraget – både for arbeidet og for transporten. Org.nr. ${site.orgnr}.`,
  },
  {
    title: "Bedrift og rammeavtaler",
    body: "Løpende bortkjøring og rydding for håndverkere og entreprenører underveis i prosjekter. Fakturering til både privat og bedrift.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-sand py-14 sm:py-16">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Om leveransen</p>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              Rammene for
              <br />
              hvert oppdrag.
            </h2>
          </div>
          <p className="self-end text-lg leading-relaxed text-ink-600">
            Vilkårene er de samme uansett om oppdraget er én container med
            byggavfall eller riving av et helt lokale.
          </p>
        </div>

        <ul className="mt-10 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {terms.map((t) => (
            <li key={t.title} className="border-t border-ink-950/10 py-8">
              <h3 className="font-display text-xl font-bold">{t.title}</h3>
              <p className="mt-2.5 leading-relaxed text-ink-600">{t.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
