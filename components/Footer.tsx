import Logo from "@/components/Logo";
import { site } from "@/config/site";

const FOOTER_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Order" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-chocolate-900 text-cream-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <a href="#home" className="inline-block">
            <Logo light />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-cream-400">
            {site.tagline}, mixed by hand and finished with a little extra
            sweetness.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl text-cream-100">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-blush-300"
              >
                {site.email}
              </a>
            </li>
            {site.phone ? (
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-blush-300"
                >
                  {site.phone}
                </a>
              </li>
            ) : null}
            <li className="text-cream-400">Made to order, for pickup and local delivery.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl text-cream-100">Visit us online</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-blush-300"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-blush-300"
              >
                Facebook
              </a>
            </li>
          </ul>
          <nav aria-label="Footer" className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-cream-400">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-blush-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-chocolate-700/80 px-4 py-5 text-center text-xs tracking-wide text-cream-400 sm:px-6 lg:px-8">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
