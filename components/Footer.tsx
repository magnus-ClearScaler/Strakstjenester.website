import Image from "next/image";
import Link from "next/link";
import { site, services } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline-dark bg-ink-950 pb-28 pt-20 text-white/55 lg:pb-20">
      <div className="container-x">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            {/* Logoen har mørk tekst, så den får en lys plate på mørk bakgrunn */}
            <div className="inline-flex rounded-edge bg-white px-4 py-3">
              <Image
                src="/logo.webp"
                alt={site.name}
                width={208}
                height={64}
                loading="lazy"
                className="h-8 w-auto"
              />
            </div>
            <p className="mt-6 max-w-sm leading-relaxed">
              Din lokale partner for transport, rydding, riving og
              avfallshåndtering i Oslo og omegn. Over 20 års erfaring.
            </p>
            <div className="mt-7 flex gap-2.5">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-edge border border-hairline-dark transition-colors hover:border-brand-500 hover:text-brand-500"
                aria-label="Straks Tjenester på Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-4">
                  <path d="M14 8.5V6.9c0-.7.2-1.1 1.2-1.1H16.5V3.1A17 17 0 0 0 14.6 3c-2 0-3.4 1.2-3.4 3.5v2H8.8v3h2.4V21h3.1v-9.5h2.4l.4-3H14Z" />
                </svg>
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-edge border border-hairline-dark transition-colors hover:border-brand-500 hover:text-brand-500"
                aria-label="Straks Tjenester på Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  aria-hidden
                  className="size-4"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="3.8" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h2 className="eyebrow-light">Tjenester</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href="/#tjenester" className="transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow-light">Kontakt</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={site.phone.primary.href} className="transition-colors hover:text-white">
                  {site.phone.primary.display}
                </a>
              </li>
              <li>
                <a href={site.phone.secondary.href} className="transition-colors hover:text-white">
                  {site.phone.secondary.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li className="pt-2 leading-relaxed">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-hairline-dark pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · Org.nr. {site.orgnr} MVA
          </p>
          <Link href="/personvern" className="transition-colors hover:text-white">
            Personvernerklæring
          </Link>
        </div>
      </div>
    </footer>
  );
}
