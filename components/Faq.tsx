import { faqs } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  return (
    <section
      id="sporsmal"
      className="scroll-mt-24 border-t border-hairline bg-sand py-14 sm:py-16"
    >
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <p className="eyebrow">Ofte stilte spørsmål</p>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              Godt å vite
              <br />
              før du bestiller.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              Finner du ikke svaret? Ring{" "}
              <a
                href="tel:+4797473951"
                className="font-bold text-brand-800 underline-offset-4 hover:underline"
              >
                97 47 39 51
              </a>{" "}
              – vi svarer gjerne.
            </p>
          </div>

          {/* Native details/summary: ingen JavaScript, full tastaturstøtte */}
          <div>
            {faqs.map((f) => (
              <details key={f.q} className="group border-t border-hairline py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-bold text-ink-950 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden
                    className="relative mt-2 size-4 shrink-0 text-brand-700"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90" />
                  </span>
                </summary>
                <p className="mt-4 max-w-prose leading-relaxed text-ink-600">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
