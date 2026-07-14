import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description:
    "Slik behandler Straks Tjenester AS personopplysninger som samles inn via nettsiden.",
  alternates: { canonical: "/personvern" },
  robots: { index: false, follow: true },
};

export default function Personvern() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="container-x max-w-3xl py-16 sm:py-24">
          <p className="eyebrow">Juridisk</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Personvernerklæring
          </h1>
          <p className="mt-5 text-lg text-ink-500">
            Denne erklæringen forklarer hvilke personopplysninger{" "}
            {site.name} samler inn via nettsiden, hvorfor vi gjør det, og
            hvilke rettigheter du har.
          </p>

          <div className="mt-12 space-y-10 leading-relaxed text-ink-700">
            <section>
              <h2 className="text-2xl font-bold">Behandlingsansvarlig</h2>
              <p className="mt-3">
                {site.name} (org.nr. {site.orgnr}), {site.address.street},{" "}
                {site.address.postalCode} {site.address.city}, er ansvarlig for
                behandlingen av personopplysningene dine. Har du spørsmål, kan
                du kontakte oss på{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-brand-700 underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>{" "}
                eller {site.phone.primary.display}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">
                Hvilke opplysninger samler vi inn?
              </h2>
              <p className="mt-3">
                Når du fyller ut kontaktskjemaet, lagrer og sender vi navn,
                telefonnummer, e-postadresse, valgt tjeneste og meldingen du
                skriver. Vi samler ikke inn mer enn det vi trenger for å svare
                deg.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">
                Hva bruker vi opplysningene til?
              </h2>
              <p className="mt-3">
                Opplysningene brukes utelukkende til å besvare henvendelsen din
                og eventuelt levere tjenesten du ber om. Det rettslige
                grunnlaget er ditt samtykke, og vår berettigede interesse i å
                følge opp forespørsler fra potensielle kunder.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">Deling av opplysninger</h2>
              <p className="mt-3">
                Vi selger eller deler aldri opplysningene dine med
                tredjeparter for markedsføringsformål. For å drifte nettsiden
                og sende e-post benytter vi databehandlere som Vercel
                (nettsidedrift) og Resend (e-postutsending). Disse behandler
                opplysningene på våre vegne og etter våre instrukser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">Lagringstid</h2>
              <p className="mt-3">
                Henvendelser lagres så lenge det er nødvendig for å følge opp
                saken, og slettes når de ikke lenger har noen verdi for
                kundeforholdet. Du kan når som helst be om at vi sletter
                henvendelsen din.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">Informasjonskapsler</h2>
              <p className="mt-3">
                Nettsiden bruker ikke informasjonskapsler til sporing eller
                markedsføring uten ditt samtykke. Nødvendige kapsler kan
                benyttes for at siden skal fungere teknisk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">Dine rettigheter</h2>
              <p className="mt-3">
                Du har rett til innsyn i, retting av og sletting av
                opplysningene vi har om deg, og du kan når som helst trekke
                tilbake et samtykke. Ta kontakt på{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-brand-700 underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
                , så hjelper vi deg. Mener du at vi behandler opplysningene
                dine i strid med regelverket, kan du klage til Datatilsynet.
              </p>
            </section>
          </div>

          <Link
            href="/"
            className="mt-14 inline-flex items-center gap-2 font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            ← Tilbake til forsiden
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
