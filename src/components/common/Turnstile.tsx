"use client";

import { useEffect, useRef, useState } from "react";
import { loadTurnstileScript } from "@/lib/turnstile";

interface TurnstileProps {
  onVerify: (token: string) => void;
  options?: any;
}

export function Turnstile({ onVerify, options }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [siteKey, setSiteKey] = useState<string | null>(null);

  useEffect(() => {
    // Get site key from env (standard Next.js env access)
    const key = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;
    if (!key) {
      console.warn("Cloudflare Turnstile site key missing");
      return;
    }
    setSiteKey(key);

    loadTurnstileScript().then(() => {
      if (window.turnstile && containerRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: key,
          callback: (token: string) => {
            onVerify(token);
          },
          ...options,
        });
      }
    });

    return () => {
      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {
          // Ignore removal errors on unmount
        }
        widgetIdRef.current = null;
      }
    };
  }, [onVerify, options]);

  if (!siteKey) return null;

  return <div ref={containerRef} className="my-3 flex justify-center" />;
}
