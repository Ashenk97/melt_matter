import Image from "next/image";
import type { MenuItem } from "@/config/menu";

type MenuCardProps = {
  item: MenuItem;
  headingLevel?: "h3" | "h4";
  onOrder?: (item: MenuItem) => void;
};

export default function MenuCard({
  item,
  headingLevel = "h3",
  onOrder,
}: MenuCardProps) {
  const Heading = headingLevel;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-cream-50 shadow-soft ring-1 ring-chocolate-100/80 transition duration-300 hover:-translate-y-1.5 hover:shadow-blush hover:ring-blush-200">
      <div className="relative aspect-[4/3] overflow-hidden bg-chocolate-100">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <Heading className="font-display text-2xl font-semibold text-chocolate-800">
            {item.name}
          </Heading>
          <p className="shrink-0 pt-1 text-sm font-semibold tracking-wide text-blush-600">
            {item.price}
          </p>
        </div>
        <p className="mt-2 text-sm leading-6 text-chocolate-600">{item.description}</p>
        {onOrder ? (
          <div className="mt-auto pt-5">
            <button
              type="button"
              onClick={() => onOrder(item)}
              className="inline-flex items-center justify-center rounded-full bg-blush-100 px-4 py-2 text-sm font-semibold tracking-wide text-chocolate-800 ring-1 ring-blush-300/80 transition-colors hover:bg-blush-200"
            >
              Order
            </button>
          </div>
        ) : null}
      </div>
    </article>
  );
}
