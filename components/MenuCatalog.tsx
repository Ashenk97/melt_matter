"use client";

import { useMemo, useState } from "react";
import MenuCard from "@/components/MenuCard";
import OrderModal from "@/components/OrderModal";
import {
  MENU_CATEGORIES,
  MENU_FILTERS,
  type MenuFilterId,
  type MenuItem,
} from "@/config/menu";

export default function MenuCatalog() {
  const [filter, setFilter] = useState<MenuFilterId>("all");
  const [orderItem, setOrderItem] = useState<MenuItem | null>(null);

  const visibleCategories = useMemo(
    () =>
      filter === "all"
        ? MENU_CATEGORIES
        : MENU_CATEGORIES.filter((category) => category.id === filter),
    [filter],
  );

  return (
    <section id="menu" className="relative bg-cream-100 pb-20 sm:pb-24">
      <div className="sticky top-[4.5rem] z-40 border-b border-chocolate-100/80 bg-cream-100/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            role="tablist"
            aria-label="Menu categories"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 py-3 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
          >
            {MENU_FILTERS.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(tab.id)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-200 ${
                    isActive
                      ? "bg-chocolate-700 text-cream-100 shadow-soft"
                      : "bg-cream-50 text-chocolate-600 ring-1 ring-chocolate-100 hover:bg-blush-100 hover:text-chocolate-800"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-4 pt-12 sm:px-6 lg:px-8">
        {visibleCategories.map((category) => (
          <div key={category.id}>
            <div className="mb-8 max-w-xl">
              <h2 className="font-display text-3xl text-chocolate-800">{category.title}</h2>
              <p className="mt-2 text-chocolate-600">{category.subtitle}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <MenuCard
                  key={item.name}
                  item={item}
                  headingLevel="h3"
                  onOrder={setOrderItem}
                />
              ))}
            </div>
          </div>
        ))}

        <p className="text-center text-sm text-chocolate-500">
          Classic and custom cake prices begin at the listed amount and are quoted
          to size, filling, and finish.
        </p>
      </div>

      {orderItem ? (
        <OrderModal item={orderItem} onClose={() => setOrderItem(null)} />
      ) : null}
    </section>
  );
}
