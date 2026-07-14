import { faqs } from "@/lib/site";

/** Rich result i Google-søk. */
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
    <section id="sporsmal" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <p className="eyebrow">
              <span className="h-px w-6 bg-brand-500" />
              Ofte stilte spørsmål
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Godt å vite før du bestiller
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">
              Finner du ikke svaret? Ring{" "}
              <a
                href="tel:+4797473951"
                className="font-semibold text-brand-700 underline-offset-4 hover:underline"
              >
                97 47 39 51
              </a>{" "}
              – vi svarer gjerne.
            </p>
          </div>

          {/* Native details/summary: ingen JavaScript, full tastaturstøtte */}
          <div className="divide-y divide-hairline border-y border-hairline">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden
                    className="relative size-5 shrink-0 text-brand-700"
                  >
                    <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current" />
                    <span className="absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 rounded-full bg-current transition-transform duration-300 group-open:rotate-90" />
                  </span>
                </summary>
                <p className="mt-3 max-w-prose leading-relaxed text-ink-500">
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
