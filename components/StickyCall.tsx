import { site } from "@/lib/site";
import { PhoneIcon } from "./Icons";

/**
 * Fast handlingslinje nederst på mobil.
 * Betalt trafikk kommer nesten alltid fra mobil – dette holder
 * «ring» og «be om pris» innen rekkevidde uansett hvor på siden brukeren er.
 */
export default function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-sand/95 backdrop-blur-md lg:hidden">
      <div className="flex gap-2.5 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3">
        <a href={site.phone.primary.href} className="btn-outline flex-1 px-4">
          <PhoneIcon className="size-4" />
          Ring oss
        </a>
        <a href="#kontakt" className="btn-brand flex-1 px-4">
          Få pristilbud
        </a>
      </div>
    </div>
  );
}
