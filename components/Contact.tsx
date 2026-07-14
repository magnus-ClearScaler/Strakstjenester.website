import { site } from "@/lib/site";
import ContactForm from "./ContactForm";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-ink-950 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          {/* Venstre: kontaktinfo */}
          <div className="text-white">
            <p className="eyebrow text-brand-400">
              <span className="h-px w-6 bg-brand-500" />
              Kontakt oss
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              La oss ta jobben herfra
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/60">
              Ta kontakt for en uforpliktende samtale om hva du trenger. Du får
              et konkret pristilbud – og 15 % rabatt på første oppdrag.
            </p>

            <ul className="mt-10 space-y-5">
              <li>
                <a
                  href={site.phone.primary.href}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-brand-500/40 hover:bg-white/[0.07]"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                    <PhoneIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/50">
                      Ring oss – raskeste vei til svar
                    </span>
                    <span className="mt-0.5 block font-display text-xl font-bold text-white">
                      {site.phone.primary.display}
                    </span>
                    <span className="mt-0.5 block text-sm text-white/50">
                      eller {site.phone.secondary.display}
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-brand-500/40 hover:bg-white/[0.07]"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-400">
                    <MailIcon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-white/50">E-post</span>
                    <span className="mt-0.5 block break-all font-display text-lg font-bold text-white">
                      {site.email}
                    </span>
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-400">
                  <PinIcon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-white/50">Besøksadresse</span>
                  <span className="mt-0.5 block font-display text-lg font-bold text-white">
                    {site.address.street}
                  </span>
                  <span className="block text-white/60">
                    {site.address.postalCode} {site.address.city}
                  </span>
                </span>
              </li>

              <li className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-400">
                  <ClockIcon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-white/50">Svartid</span>
                  <span className="mt-0.5 block font-display text-lg font-bold text-white">
                    Vi svarer som regel innen 24 timer
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Høyre: skjema */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
