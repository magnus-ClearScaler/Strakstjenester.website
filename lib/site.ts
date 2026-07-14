/**
 * Alt bedriftsinnhold samlet på ett sted.
 * Endrer du noe her, slår det gjennom på hele nettstedet + strukturerte data.
 */

export const site = {
  name: "Straks Tjenester AS",
  shortName: "Straks Tjenester",
  orgnr: "928 659 720",
  url: "https://www.strakstjenester.no",
  tagline: "Transport, rydding og avfallshåndtering i Oslo",
  founded: "2022",

  phone: {
    primary: { display: "97 47 39 51", href: "tel:+4797473951" },
    secondary: { display: "98 41 98 98", href: "tel:+4798419898" },
  },
  email: "post@strakstjenester.no",

  address: {
    street: "Beverkollen 6",
    postalCode: "1275",
    city: "Oslo",
    country: "NO",
  },

  // Brukes i strukturerte data (LocalBusiness → areaServed)
  areaServed: [
    "Oslo",
    "Bærum",
    "Asker",
    "Lørenskog",
    "Skedsmo",
    "Oppegård",
    "Ski",
    "Nordre Follo",
  ],

  social: {
    facebook:
      "https://www.facebook.com/people/Straks-Tjenester-As/100095311321402/",
    instagram: "https://www.instagram.com/strakstjenester/",
  },

  offer: "15 % rabatt på din første tjeneste",
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  bullets: string[];
  image?: string;
  imageAlt?: string;
  /** Fremhevet kort uten foto – brukes for tjenester vi ikke har bilde av ennå */
  accent?: boolean;
};

export const services: Service[] = [
  {
    slug: "transport",
    title: "Transport og flytting",
    short: "Henting, levering og flytting i hele Oslo-området.",
    body: "Vi frakter alt fra enkeltmøbler til hele husholdninger. Egne biler, erfarne folk og forsikret transport – vi henter der det passer deg og leverer der det skal.",
    bullets: [
      "Flyttehjelp for privat og bedrift",
      "Henting og levering samme dag",
      "Bæring, sikring og emballering",
    ],
    image: "/bilder/transport.webp",
    imageAlt:
      "Stue midt i en flytteprosess med stablede flyttekasser klare for transport",
  },
  {
    slug: "avfallshandtering",
    title: "Avfallshåndtering",
    short: "Vi rydder, laster og kjører bort – og sorterer riktig.",
    body: "Vi tar hånd om avfallet fra A til Å. Vi rydder, laster, kjører bort og leverer til godkjent mottak, slik at du slipper turene til gjenvinningsstasjonen.",
    bullets: [
      "Bortkjøring av alt innvendig avfall",
      "Levering til godkjent mottak",
      "Sortering etter forskriftene",
    ],
    image: "/bilder/avfall.webp",
    imageAlt: "Container fylt med byggavfall som trevirke og gipsplater",
  },
  {
    slug: "riving",
    title: "Riving og rydding",
    short: "Fra én vegg til hele lokaler – trygt og effektivt.",
    body: "Vi tar rivningsarbeid i små og store prosjekter. Vi sørger for en trygg og effektiv prosess, rydder etter oss og kjører bort alt avfallet i samme slengen.",
    bullets: [
      "Riving av vegger, bad og kjøkken",
      "Små og store prosjekter",
      "Rydding og bortkjøring inkludert",
    ],
    image: "/bilder/riving.webp",
    imageAlt: "Håndverker med slegge som river en innervegg",
  },
  {
    slug: "rengjoring",
    title: "Rengjøring",
    short: "Flyttevask, visningsvask og rengjøring etter oppdrag.",
    body: "Vi vasker grundig og etter tydelig standard – enten det er flyttevask som skal godkjennes, visningsvask før salg, eller opprydding etter et byggeprosjekt.",
    bullets: [
      "Flyttevask og visningsvask",
      "Rengjøring etter oppussing",
      "Fast renhold for bedrift",
    ],
    accent: true,
  },
  {
    slug: "hageavfall",
    title: "Hageavfall",
    short: "Vi rydder hagen og kjører bort alt grønt.",
    body: "Fra enkelt vedlikehold til større opprydding: vi beskjærer, rydder og fjerner hageavfallet, slik at du kan fokusere på å nyte hagen i stedet for å kjøre til fyllinga.",
    bullets: [
      "Beskjæring og hagerydding",
      "Bortkjøring av kvist og greiner",
      "Rydding før og etter sesong",
    ],
    image: "/bilder/hageavfall.webp",
    imageAlt: "Hansker og beskjæringssaks som beskjærer en grein i hagen",
  },
  {
    slug: "montering",
    title: "Møbelmontering og dødsbo",
    short: "Montering, demontering og skånsom tømming av dødsbo.",
    body: "Vi monterer og demonterer møbler og reoler raskt og effektivt. Vi håndterer også dødsbo med omsorg og diskresjon, og sørger for at alt blir tatt vare på med respekt.",
    bullets: [
      "Montering og demontering av møbler",
      "Tømming av dødsbo og leiligheter",
      "Diskret og respektfull håndtering",
    ],
    image: "/bilder/mobelmontering.webp",
    imageAlt: "Håndverker som monterer en sengeramme med skrutrekker",
  },
];

export const faqs = [
  {
    q: "Hva koster det?",
    a: "Prisen avhenger av omfang, mengde og adkomst. Derfor gir vi deg alltid et konkret og uforpliktende pristilbud før vi starter – du vet hva du betaler på forhånd. Nye kunder får 15 % rabatt på første tjeneste.",
  },
  {
    q: "Hvor raskt kan dere komme?",
    a: "Vi heter Straks av en grunn. I mange tilfeller rykker vi ut samme eller neste dag. Ring oss på 97 47 39 51, så finner vi et tidspunkt som passer.",
  },
  {
    q: "Hvilke områder dekker dere?",
    a: "Vi dekker Oslo og omegn, blant annet Bærum, Asker, Lørenskog, Nordre Follo og Skedsmo. Er du usikker på om vi kommer til deg? Ta kontakt, så sier vi ifra med en gang.",
  },
  {
    q: "Hva skjer med avfallet dere kjører bort?",
    a: "Alt avfall sorteres og leveres til godkjent mottak i tråd med gjeldende forskrifter. Du skal slippe å tenke på papirarbeid eller turer til gjenvinningsstasjonen.",
  },
  {
    q: "Tar dere oppdrag for bedrifter og håndverkere?",
    a: "Ja. Vi har lang erfaring med samarbeid på større prosjekter og tilpasser oss bedriftens behov, enten det gjelder fast bortkjøring, riving eller rydding underveis i et prosjekt.",
  },
  {
    q: "Er dere forsikret?",
    a: "Ja, Straks Tjenester AS er et registrert norsk aksjeselskap (org.nr. 928 659 720) med ansvarsforsikring. Du er trygg gjennom hele oppdraget.",
  },
] as const;
