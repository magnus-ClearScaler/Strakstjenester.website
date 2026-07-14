import Image from "next/image";
import { services, type Service } from "@/lib/site";
import { CheckIcon, ArrowIcon, SparkleIcon } from "./Icons";

function PhotoCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card border border-hairline bg-white shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-lift-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={service.image!}
          alt={service.imageAlt ?? ""}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">
          {service.body}
        </p>

        <ul className="mt-5 space-y-2">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700">
              <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand-700" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/** Fremhevet kort i merkevarefargen – brukes der vi ikke har eget foto ennå. */
function AccentCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card bg-brand-700 shadow-lift transition-all duration-300 hover:-translate-y-1 hover:shadow-lift-lg">
      {/* Dekorative sirkler gir kortet dybde uten et bilde */}
      <div
        aria-hidden
        className="absolute -right-16 -top-16 size-56 rounded-full bg-white/10"
      />
      <div
        aria-hidden
        className="absolute -bottom-20 -left-10 size-48 rounded-full bg-ink-950/10"
      />

      <div className="relative flex flex-1 flex-col p-6">
        <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/20 text-white">
          <SparkleIcon className="size-6" />
        </span>

        <h3 className="mt-5 font-display text-xl font-bold text-white">
          {service.title}
        </h3>
        {/* Full hvit, ikke nedtonet: hvit på merkevareoransje ligger allerede
            på 4.53:1, og enhver gjennomsiktighet ville falt under AA-kravet. */}
        <p className="mt-2 text-sm leading-relaxed text-white">
          {service.body}
        </p>

        <ul className="mt-5 space-y-2">
          {service.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2.5 text-sm font-medium text-white"
            >
              <CheckIcon className="mt-0.5 size-4 shrink-0 text-white" />
              {b}
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
        >
          Be om pris på rengjøring
          <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="tjenester" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-6 bg-brand-500" />
            Hva kan vi hjelpe deg med?
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Én leverandør for hele jobben
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500">
            Du slipper å ringe rundt til fem forskjellige firmaer. Vi tar
            transporten, ryddingen, rivingen og bortkjøringen – og leverer
            avfallet til godkjent mottak.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) =>
            service.accent ? (
              <AccentCard key={service.slug} service={service} />
            ) : (
              <PhotoCard key={service.slug} service={service} />
            ),
          )}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-card border border-hairline bg-white p-8 text-center shadow-lift sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-lg font-bold">
              Finner du ikke det du leter etter?
            </p>
            <p className="mt-1 text-ink-500">
              Vi tar de fleste oppdrag – ring oss, så finner vi ut av det sammen.
            </p>
          </div>
          <a
            href="#kontakt"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Spør oss
            <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
