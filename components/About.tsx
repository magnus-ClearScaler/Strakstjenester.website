import Image from "next/image";
import { site } from "@/lib/site";
import { PhoneIcon, MailIcon } from "./Icons";

export default function About() {
  return (
    <section id="om-oss" className="scroll-mt-24 bg-sand py-14 sm:py-16">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-edge">
            <Image
              src="/bilder/om-oss.webp"
              alt="Medarbeider fra Straks Tjenester i arbeid"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">Hvem er vi?</p>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              Oslo-basert,
              <br />
              med 20 år i bransjen.
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-600">
              <p>
                Straks Tjenester holder til på Beverkollen i Oslo og har over 20
                års samlet erfaring fra transport, riving og avfallshåndtering.
              </p>
              <p>
                Vi tar oppdrag for både privatpersoner og bedrifter – fra én
                enkelt bortkjøring til riving og rydding av hele lokaler – og
                håndterer avfallet fra henting til levering ved godkjent mottak.
              </p>
            </div>

            {/* Kontaktkort til styrets leder – bygger tillit */}
            <div className="mt-10 border-t border-hairline pt-8">
              <p className="eyebrow">Styrets leder</p>
              <p className="mt-2 font-display text-2xl font-bold text-ink-950">
                Danish Zahid Dar
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:gap-8">
                <a
                  href={site.phone.primary.href}
                  className="inline-flex items-center gap-2.5 text-sm font-semibold text-ink-950 transition-colors hover:text-brand-700"
                >
                  <PhoneIcon className="size-4 text-brand-700" />
                  {site.phone.primary.display}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 break-all text-sm font-semibold text-ink-950 transition-colors hover:text-brand-700"
                >
                  <MailIcon className="size-4 shrink-0 text-brand-700" />
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
