"use client";

import { useEffect } from "react";
import OrderForm from "@/components/OrderForm";
import type { MenuItem } from "@/config/menu";

type OrderModalProps = {
  item?: MenuItem;
  onClose: () => void;
};

export default function OrderModal({ item, onClose }: OrderModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const initialDetails = item ? `I'd like to order the ${item.name} (${item.price}).` : "";

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-chocolate-900/55 backdrop-blur-sm"
        aria-label="Close order form"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
        className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[1.75rem] bg-cream-100 p-6 text-chocolate-800 shadow-soft sm:p-8"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blush-600">
              Order request
            </p>
            <h2 id="order-modal-title" className="mt-2 font-display text-3xl text-chocolate-800">
              {item?.name ?? "Place an order"}
            </h2>
            {item ? (
              <p className="mt-1 text-sm font-semibold tracking-wide text-blush-600">{item.price}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-chocolate-200 text-chocolate-700 transition-colors hover:bg-blush-100"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <OrderForm key={item?.name ?? "general"} initialDetails={initialDetails} />
      </div>
    </div>
  );
}
