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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-sand/95 backdrop-blur-md transition-colors duration-300 ${
        scrolled || open ? "border-b border-hairline" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label={`${site.name} – til forsiden`}
        >
          <Image
            src="/logo.webp"
            alt={site.name}
            width={208}
            height={64}
            priority
            className="h-8 w-auto sm:h-9"
          />
          <span className="hidden border-l border-hairline pl-3 text-[10px] font-semibold uppercase tracking-[0.18em] leading-tight text-ink-500 sm:block">
            Oslo · 20+ års
            <br />
            erfaring
          </span>
        </Link>

        <nav aria-label="Hovedmeny" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-700 transition-colors hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phone.primary.href}
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-ink-950 transition-colors hover:text-brand-700"
          >
            <PhoneIcon className="size-4" />
            {site.phone.primary.display}
          </a>
          <a href="/#kontakt" className="btn-brand">
            Få pristilbud
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={site.phone.primary.href}
            aria-label={`Ring ${site.phone.primary.display}`}
            className="inline-flex size-11 items-center justify-center text-ink-950"
          >
            <PhoneIcon className="size-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobilmeny"
            aria-label={open ? "Lukk meny" : "Åpne meny"}
            className="inline-flex size-11 items-center justify-center text-ink-950"
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobilmeny"
        hidden={!open}
        className="border-t border-hairline bg-sand lg:hidden"
      >
        <nav aria-label="Mobilmeny" className="container-x flex flex-col py-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-hairline py-4 text-sm font-bold uppercase tracking-[0.14em] text-ink-950"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/#kontakt"
            onClick={() => setOpen(false)}
            className="btn-brand my-5"
          >
            Få uforpliktende pristilbud
          </a>
        </nav>
      </div>
    </header>
  );
}
