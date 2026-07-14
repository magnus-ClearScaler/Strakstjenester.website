import Image from "next/image";
import { site } from "@/lib/site";
import { PhoneIcon, MailIcon } from "./Icons";

export default function About() {
  return (
    <section id="om-oss" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-lift-lg">
              <Image
                src="/bilder/om-oss.webp"
                alt="Medarbeider fra Straks Tjenester i arbeid"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Kontaktkort til styrets leder – bygger tillit */}
            <div className="relative z-10 -mt-12 ml-6 mr-6 rounded-card border border-hairline bg-white p-6 shadow-lift-lg sm:ml-12 sm:mr-0 sm:max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                Styrets leder
              </p>
              <p className="mt-1.5 font-display text-xl font-bold">
                Danish Zahid Dar
              </p>
              <div className="mt-4 space-y-2 border-t border-hairline pt-4 text-sm">
                <a
                  href={site.phone.primary.href}
                  className="flex items-center gap-2.5 text-ink-700 transition-colors hover:text-brand-700"
                >
                  <PhoneIcon className="size-4 text-brand-700" />
                  {site.phone.primary.display}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 break-all text-ink-700 transition-colors hover:text-brand-700"
                >
                  <MailIcon className="size-4 shrink-0 text-brand-700" />
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">
              <span className="h-px w-6 bg-brand-500" />
              Hvem er vi?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              En lokal partner, ikke bare en leverandør
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-500">
              <p>
                Straks Tjenester AS ble etablert i {site.founded}, men folkene
                bak har mange års erfaring fra bransjen. Vi har betjent Oslo og
                omegn med stolthet siden dag én.
              </p>
              <p>
                Vi går utover det å være en ren tjenesteleverandør. Vårt team
                jobber hardt for at hver eneste oppgave blir utført med høyeste
                standard og nøyaktighet – enten det er en enkelt bortkjøring
                eller et større riveprosjekt.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-hairline pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-sm text-ink-500">Organisasjonsnr.</dt>
                <dd className="mt-1 font-display font-bold text-ink-900">
                  {site.orgnr}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink-500">Etablert</dt>
                <dd className="mt-1 font-display font-bold text-ink-900">
                  {site.founded}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink-500">Selskapsform</dt>
                <dd className="mt-1 font-display font-bold text-ink-900">
                  Aksjeselskap
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
