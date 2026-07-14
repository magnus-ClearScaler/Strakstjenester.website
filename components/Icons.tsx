type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.6 3.8h-2A1.6 1.6 0 0 0 3 5.5c0 8.6 7 15.5 15.5 15.5a1.6 1.6 0 0 0 1.6-1.6v-2a1.1 1.1 0 0 0-.9-1.1l-3.2-.6a1.1 1.1 0 0 0-1.1.5l-1 1.5a12.6 12.6 0 0 1-5.6-5.6l1.5-1a1.1 1.1 0 0 0 .5-1.1l-.6-3.2a1.1 1.1 0 0 0-1.1-.9Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeWidth={2.2} className={className}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 5 6v5.5c0 4.3 3 8.3 7 9.5 4-1.2 7-5.2 7-9.5V6l-7-3Z" />
      <path d="m9.2 12 2 2 3.6-4" />
    </svg>
  );
}

export function RecycleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m8.9 5.6 1.6-2.7a1.7 1.7 0 0 1 3 0l1.7 2.9" />
      <path d="M18.5 10.2 20.4 13a1.7 1.7 0 0 1-1.5 2.6h-3.3" />
      <path d="M8.4 15.6H5.1A1.7 1.7 0 0 1 3.6 13l1.7-2.9" />
      <path d="m7 12.4-2 3.2 3.4.6M17.4 8.6l-3.5-.4 1.2-3.3M9.6 20.2l1.9-2.9-3.1-1.6" />
    </svg>
  );
}

export function HandshakeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m12 8.6-1.8-1.8a2 2 0 0 0-2.8 0L3.6 10.6a2 2 0 0 0 0 2.8l3.3 3.3" />
      <path d="m12 8.6 1.8-1.8a2 2 0 0 1 2.8 0l3.8 3.8a2 2 0 0 1 0 2.8l-3.3 3.3" />
      <path d="m9.4 14.2 2 2M11.8 12l2.4 2.4" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
      <path d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeWidth={1.8} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base} strokeWidth={1.8} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
