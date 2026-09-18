type LogoProps = {
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-soft ring-2 ${
          light
            ? "bg-cream-100 ring-blush-300"
            : "bg-chocolate-700 ring-blush-200"
        }`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6">
          <rect x="6" y="16" width="20" height="10" rx="2" fill={light ? "#4A2C1A" : "#FFF8F0"} />
          <rect x="8" y="11" width="16" height="6" rx="1.5" fill="#F4B8CB" />
          <rect x="10" y="7" width="12" height="5" rx="1.5" fill={light ? "#4A2C1A" : "#FFF8F0"} />
          <circle cx="16" cy="6" r="2" fill="#F4B8CB" />
        </svg>
      </div>
      <div className="leading-tight">
        <span
          className={`font-script text-[1.7rem] ${
            light ? "text-cream-100" : "text-chocolate-800"
          }`}
        >
          Melt Matter
        </span>
        <p
          className={`hidden text-[0.65rem] font-semibold uppercase tracking-[0.22em] sm:block ${
            light ? "text-blush-300" : "text-chocolate-400"
          }`}
        >
          Brownies &amp; Cakes
        </p>
      </div>
    </div>
  );
}
