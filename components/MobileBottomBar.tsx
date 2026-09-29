"use client";

import { useCallback, useState } from "react";
import OrderModal from "@/components/OrderModal";
import { site } from "@/config/site";

const WHATSAPP_MESSAGE = `Hi ${site.name}! I'd like to place an order.`;

function whatsappHref() {
  const number = site.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

export default function MobileBottomBar() {
  const [orderOpen, setOrderOpen] = useState(false);
  const closeOrder = useCallback(() => setOrderOpen(false), []);

  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t border-white/50 bg-cream-50/70 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-10px_30px_-12px_rgba(62,35,22,0.25)] backdrop-blur-xl backdrop-saturate-150 md:hidden"
        role="region"
        aria-label="Quick order"
      >
        <div className="mx-auto flex max-w-md items-center gap-3">
          <button
            type="button"
            onClick={() => setOrderOpen(true)}
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-chocolate-800 px-6 text-base font-bold tracking-wide text-cream-50 shadow-soft transition active:scale-[0.98] active:bg-chocolate-900"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M5 8h14l-1.2 10.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z" strokeLinejoin="round" />
              <path d="M9 8V6.5a3 3 0 0 1 6 0V8" strokeLinecap="round" />
            </svg>
            Order Now
          </button>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp us"
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
              <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Z" />
            </svg>
          </a>
        </div>
      </div>
      {orderOpen ? <OrderModal onClose={closeOrder} /> : null}
    </>
  );
}
