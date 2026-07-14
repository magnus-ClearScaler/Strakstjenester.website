import Image from "next/image";
import Link from "next/link";
import { site, services } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-950 pb-28 pt-16 text-white/60 lg:pb-16">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            {/* Logoen er mørk tekst, så vi gir den en lys plate på mørk bakgrunn */}
            <div className="inline-flex rounded-xl bg-white px-4 py-3">
              <Image
                src="/logo.webp"
                alt={site.name}
                width={208}
                height={64}
                loading="lazy"
                className="h-9 w-auto"
              />
            </div>
            <p className="mt-5 max-w-sm leading-relaxed">
              Din lokale partner for transport, rydding, riving og
              avfallshåndtering i Oslo og omegn.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-brand-500 hover:text-brand-500"
                aria-label="Straks Tjenester på Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                  className="size-4"
                >
                  <path d="M14 8.5V6.9c0-.7.2-1.1 1.2-1.1H16.5V3.1A17 17 0 0 0 14.6 3c-2 0-3.4 1.2-3.4 3.5v2H8.8v3h2.4V21h3.1v-9.5h2.4l.4-3H14Z" />
                </svg>
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-brand-500 hover:text-brand-500"
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
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
              Tjenester
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/#tjenester"
                    className="transition-colors hover:text-brand-500"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
              Kontakt
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={site.phone.primary.href}
                  className="transition-colors hover:text-brand-500"
                >
                  {site.phone.primary.display}
                </a>
              </li>
              <li>
                <a
                  href={site.phone.secondary.href}
                  className="transition-colors hover:text-brand-500"
                >
                  {site.phone.secondary.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-brand-500"
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

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · Org.nr. {site.orgnr} MVA
          </p>
          <Link
            href="/personvern"
            className="transition-colors hover:text-brand-500"
          >
            Personvernerklæring
          </Link>
        </div>
      </div>
    </footer>
  );
}
