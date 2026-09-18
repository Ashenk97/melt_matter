"use client";

import { useEffect, useState } from "react";

type ElfsightWidgetProps = {
  appId: string;
  label: string;
  description: string;
};

export default function ElfsightWidget({
  appId,
  label,
  description,
}: ElfsightWidgetProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="min-h-[28rem] w-full max-w-full overflow-auto"
      suppressHydrationWarning
    >
      {mounted && appId ? (
        <div
          className={`elfsight-app-${appId}`}
          data-elfsight-app-lazy
        />
      ) : (
        <div
          className="flex min-h-[28rem] flex-col items-center justify-center gap-3 px-6 py-12 text-center"
          data-widget-placeholder={label}
        >
          <p className="font-display text-2xl text-chocolate-800">{label}</p>
          <p className="max-w-sm text-sm leading-6 text-chocolate-600">
            {description}
          </p>
          <p className="mt-2 rounded-full bg-blush-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blush-600">
            Widget placeholder
          </p>
        </div>
      )}
    </div>
  );
}
