"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, MenuIcon, CloseIcon } from "./Icons";

const nav = [
  { label: "Tjenester", href: "/#tjenester" },
  { label: "Slik jobber vi", href: "/#prosess" },
  { label: "Om oss", href: "/#om-oss" },
  { label: "Spørsmål", href: "/#sporsmal" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lås bakgrunnsscroll når mobilmenyen er åpen
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    // Alltid lys bakgrunn: logoen har mørk tekst, og navigasjonen må ha
    // lesbar kontrast også over det mørke heltebildet.
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-hairline shadow-lift" : "border-hairline/60"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="relative z-10 shrink-0"
          aria-label={`${site.name} – til forsiden`}
        >
          <Image
            src="/logo.webp"
            alt={site.name}
            width={208}
            height={64}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav
          aria-label="Hovedmeny"
          className="hidden items-center gap-8 lg:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phone.primary.href}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:text-brand-700"
          >
            <PhoneIcon className="size-4" />
            {site.phone.primary.display}
          </a>
          <a
            href="/#kontakt"
            className="inline-flex items-center rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lift transition-all hover:bg-brand-800 hover:shadow-lift-lg"
          >
            Få pristilbud
          </a>
        </div>

        {/* Mobil: ring-knapp + meny */}
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={site.phone.primary.href}
            aria-label={`Ring ${site.phone.primary.display}`}
            className="relative z-10 inline-flex size-11 items-center justify-center rounded-full text-ink-900"
          >
            <PhoneIcon className="size-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobilmeny"
            aria-label={open ? "Lukk meny" : "Åpne meny"}
            className="relative z-10 inline-flex size-11 items-center justify-center rounded-full text-ink-900"
          >
            {open ? (
              <CloseIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobilmeny */}
      <div
        id="mobilmeny"
        hidden={!open}
        className="border-t border-hairline bg-white lg:hidden"
      >
        <nav aria-label="Mobilmeny" className="container-x flex flex-col py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-hairline py-4 font-display text-lg font-semibold text-ink-900"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/#kontakt"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-4 font-semibold text-white"
          >
            Få uforpliktende pristilbud
          </a>
        </nav>
      </div>
    </header>
  );
}
