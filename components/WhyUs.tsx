import {
  ClockIcon,
  ShieldIcon,
  RecycleIcon,
  HandshakeIcon,
  SparkleIcon,
} from "./Icons";

const reasons = [
  {
    icon: ClockIcon,
    title: "Raskt på plass",
    body: "Vi heter Straks av en grunn. Vi svarer raskt og rykker ofte ut samme eller neste dag.",
  },
  {
    icon: ShieldIcon,
    title: "Kvalitet og trygghet",
    body: "Registrert aksjeselskap med ansvarsforsikring. Erfarne folk som gjør jobben ordentlig – hver gang.",
  },
  {
    icon: SparkleIcon,
    title: "15 % på første oppdrag",
    body: "Som ny kunde får du 15 % rabatt på din første tjeneste hos oss. Ingen bindinger.",
  },
  {
    icon: RecycleIcon,
    title: "Riktig levert avfall",
    body: "Vi sorterer og leverer til godkjent mottak. Du slipper turene til gjenvinningsstasjonen.",
  },
  {
    icon: HandshakeIcon,
    title: "Fast partner for bedrifter",
    body: "Lang erfaring med håndverkere og entreprenører på større prosjekter. Vi tilpasser oss driften din.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-ink-950 py-20 text-white sm:py-28">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <p className="eyebrow text-brand-400">
              <span className="h-px w-6 bg-brand-500" />
              Hvorfor velge oss?
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Folk som møter opp, og gjør det de sier
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/60">
              Vi vet at du har hørt løfter før. Derfor holder vi det enkelt: du
              får en fast pris, en avtalt tid, og folk som faktisk dukker opp.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <dt className="text-sm text-white/50">Etablert</dt>
                <dd className="mt-1 font-display text-3xl font-extrabold text-brand-500">
                  2022
                </dd>
              </div>
              <div>
                <dt className="text-sm text-white/50">Dekker</dt>
                <dd className="mt-1 font-display text-3xl font-extrabold text-brand-500">
                  Oslo <span className="text-xl text-white/80">og omegn</span>
                </dd>
              </div>
            </dl>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="rounded-card border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-brand-500/40 hover:bg-white/[0.07]"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-500/15 text-brand-500">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
