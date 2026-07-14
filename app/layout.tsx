import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { site, services } from "@/lib/site";
import "./globals.css";

// Én skriftfamilie for hele siden – roligere typografi og mindre nedlasting.
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Transport, rydding og avfallshåndtering i Oslo`,
    template: `%s | ${site.name}`,
  },
  description:
    "Straks Tjenester AS hjelper deg med transport, rydding, riving, rengjøring og avfallshåndtering i Oslo og omegn. Uforpliktende pristilbud – og 15 % rabatt på første oppdrag.",
  keywords: [
    "transport Oslo",
    "avfallshåndtering Oslo",
    "bortkjøring av avfall",
    "riving Oslo",
    "dødsbo tømming Oslo",
    "hageavfall bortkjøring",
    "flyttehjelp Oslo",
    "møbelmontering Oslo",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: site.url,
    siteName: site.name,
    title: `${site.name} – Transport, rydding og avfallshåndtering i Oslo`,
    description:
      "Vi rydder, kjører bort og gjør unna jobben – straks. Uforpliktende pristilbud i Oslo og omegn.",
    images: [
      {
        url: "/bilder/hero-transport.webp",
        width: 1200,
        height: 630,
        alt: "Straks Tjenester AS – transport og bortkjøring i Oslo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#f5821f",
  colorScheme: "light",
};

/** Strukturerte data – hjelper Google vise firmaet i lokalt søk og Maps. */
function structuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#organisasjon`,
    name: site.name,
    description:
      "Transport, rydding, riving, rengjøring og avfallshåndtering i Oslo og omegn.",
    url: site.url,
    telephone: `+47${site.phone.primary.display.replace(/\s/g, "")}`,
    email: site.email,
    image: `${site.url}/bilder/hero-transport.webp`,
    logo: `${site.url}/logo.webp`,
    foundingDate: site.founded,
    vatID: `NO${site.orgnr.replace(/\s/g, "")}MVA`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    areaServed: site.areaServed.map((n) => ({ "@type": "City", name: n })),
    sameAs: [site.social.facebook, site.social.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tjenester",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.short },
      })),
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb" className={manrope.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          // Statisk, utviklerkontrollert JSON – ingen brukerinput.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData()),
          }}
        />
      </body>
    </html>
  );
}
