import { site } from "@/lib/site";
import { PhoneIcon, ArrowIcon } from "./Icons";

/**
 * Fast handlingslinje nederst på mobil.
 * Betalt trafikk kommer nesten alltid fra mobil – dette holder
 * «ring» og «be om pris» innen rekkevidde uansett hvor på siden brukeren er.
 */
export default function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-white/95 backdrop-blur-md lg:hidden">
      <div className="flex gap-3 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3">
        <a
          href={site.phone.primary.href}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-ink-900/15 px-4 py-3.5 font-semibold text-ink-900"
        >
          <PhoneIcon className="size-5" />
          Ring oss
        </a>
        <a
          href="#kontakt"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-700 px-4 py-3.5 font-semibold text-white"
        >
          Få pristilbud
          <ArrowIcon className="size-4" />
        </a>
      </div>
    </div>
  );
}
