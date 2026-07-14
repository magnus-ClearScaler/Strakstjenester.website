import { site } from "@/lib/site";
import ContactForm from "./ContactForm";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "./Icons";

const details = [
  {
    icon: PhoneIcon,
    label: "Ring oss – raskeste vei til svar",
    value: site.phone.primary.display,
    sub: `eller ${site.phone.secondary.display}`,
    href: site.phone.primary.href,
  },
  {
    icon: MailIcon,
    label: "E-post",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: PinIcon,
    label: "Besøksadresse",
    value: site.address.street,
    sub: `${site.address.postalCode} ${site.address.city}`,
  },
  {
    icon: ClockIcon,
    label: "Svartid",
    value: "Innen 24 timer",
    sub: "På hverdager svarer vi som regel raskere",
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-ink-950 py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <div>
            <p className="eyebrow-light">Kontakt oss</p>
            <h2 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl">
              La oss ta
              <br />
              jobben herfra.
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-white/55">
              Ta kontakt for en uforpliktende samtale om hva du trenger. Du får
              et konkret pristilbud – og 15 % rabatt på første oppdrag.
            </p>

            <ul className="mt-12">
              {details.map(({ icon: Icon, label, value, sub, href }) => {
                const body = (
                  <>
                    <Icon className="mt-1 size-5 shrink-0 text-brand-500" />
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                        {label}
                      </span>
                      <span className="mt-1.5 block break-words font-display text-lg font-bold text-white">
                        {value}
                      </span>
                      {sub && (
                        <span className="mt-0.5 block text-sm text-white/70">
                          {sub}
                        </span>
                      )}
                    </span>
                  </>
                );

                return (
                  <li key={label} className="border-t border-hairline-dark">
                    {href ? (
                      <a
                        href={href}
                        className="flex gap-4 py-6 transition-opacity hover:opacity-70"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex gap-4 py-6">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
