import Image from "next/image";
import { services, type Service } from "@/lib/site";
import { ArrowIcon } from "./Icons";

function Card({ service }: { service: Service }) {
  return (
    <a
      href="#kontakt"
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-edge bg-ink-950 p-7"
    >
      <Image
        src={service.image!}
        alt={service.imageAlt ?? ""}
        fill
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/5" />

      <div className="relative">
        <h3 className="font-display text-2xl font-bold text-white">
          {service.title}
        </h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/75">
          {service.short}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-400">
          Be om pris
          <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}

export default function Services() {
  return (
    <section id="tjenester" className="scroll-mt-24 bg-sand py-14 sm:py-16">
      <div className="container-x">
        {/* Todelt seksjonstittel: overskrift til venstre, brødtekst til høyre */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Hva kan vi hjelpe deg med?</p>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              Én leverandør for
              <br />
              hele jobben.
            </h2>
          </div>
          <p className="self-end text-lg leading-relaxed text-ink-600">
            Du slipper å ringe rundt til fem forskjellige firmaer. Vi tar
            avfallet, rivingen, ryddingen og bortkjøringen – og leverer til
            godkjent mottak.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink-600">
            <span className="font-bold text-ink-950">
              Finner du ikke det du leter etter?
            </span>{" "}
            Vi tar de fleste oppdrag – ring oss, så finner vi ut av det sammen.
          </p>
          <a href="#kontakt" className="btn-outline shrink-0">
            Spør oss
          </a>
        </div>
      </div>
    </section>
  );
}
