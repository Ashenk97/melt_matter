"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { ELFSIGHT_PLATFORM_SCRIPT } from "@/config/community-widgets";

export default function ElfsightPlatformScript({ enabled }: { enabled: boolean }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready || !enabled) return null;

  return (
    <Script
      id="elfsight-platform"
      src={ELFSIGHT_PLATFORM_SCRIPT}
      strategy="lazyOnload"
    />
  );
}
