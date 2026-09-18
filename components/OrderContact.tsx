"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  type OrderFieldErrors,
  type OrderPayload,
  parseOrderPayload,
  validateOrderPayload,
} from "@/lib/order";
import { site } from "@/config/site";

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  dateNeeded: "",
  details: "",
  website: "",
};

const inputClass =
  "mt-2 w-full rounded-2xl border border-chocolate-100 bg-cream-50 px-4 py-3 text-chocolate-800 outline-none transition placeholder:text-chocolate-300 focus:border-blush-300 focus:ring-2 focus:ring-blush-200";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-sm text-blush-600">{message}</p>;
}

export default function OrderContact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState<OrderFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  function updateField(name: keyof typeof EMPTY_FORM, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const payload: OrderPayload = parseOrderPayload(form);
    const nextErrors = validateOrderPayload(payload);
    setFieldErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      return;
    }

    setStatus("sending");

    try {
      const hostname = window.location.hostname;
      const isLocalHost = hostname === "localhost" || hostname === "127.0.0.1";
      const isGitHubPages = hostname.endsWith("github.io");

      if (isGitHubPages) {
        const body = [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Phone: ${payload.phone}`,
          `Date needed: ${payload.dateNeeded}`,
          "",
          payload.details,
        ].join("\n");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`New Melt Matter order from ${payload.name}`)}&body=${encodeURIComponent(body)}`;
        setForm(EMPTY_FORM);
        setFieldErrors({});
        setStatus("success");
        setMessage("Your email app should open with the order details. Send that message and we’ll confirm soon.");
        return;
      }

      const response = isLocalHost
        ? await fetch("/api/order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        : await fetch("/__forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              "form-name": "order",
              subject: `New Melt Matter order from ${payload.name}`,
              name: payload.name,
              email: payload.email,
              phone: payload.phone,
              dateNeeded: payload.dateNeeded,
              details: payload.details,
              "bot-field": payload.website ?? "",
            }).toString(),
          });

      if (isLocalHost) {
        const data = (await response.json()) as {
          error?: string;
          fields?: OrderFieldErrors;
        };

        if (!response.ok) {
          setFieldErrors(data.fields ?? {});
          setStatus("error");
          setMessage(data.error ?? "We couldn’t send your order. Please try again.");
          return;
        }
      } else if (!response.ok) {
        setStatus("error");
        setMessage("We couldn’t send your order. Please try again.");
        return;
      }

      setForm(EMPTY_FORM);
      setFieldErrors({});
      setStatus("success");
      setMessage("Thank you — we’ve received your order and will confirm soon.");
    } catch {
      setStatus("error");
      setMessage("We couldn’t send your order. Please check your connection and try again.");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden scroll-mt-24 bg-chocolate-800 py-20 text-cream-100 sm:py-24"
    >
      <div
        className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-blush-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blush-300">
            Order &amp; contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Tell us what you’re craving
          </h2>
          <p className="mt-4 font-script text-3xl text-blush-300">We’ll bake it with love</p>
          <p className="mt-6 max-w-md text-base leading-7 text-cream-300">
            Share your name, when you need it, and any custom notes — flavor, size,
            inscription, or a box of brownies for the table. We’ll reply to confirm
            availability and the final total.
          </p>
        </div>

        <form
          name="order"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[1.75rem] bg-cream-100 p-6 text-chocolate-800 shadow-soft sm:p-8"
        >
          <input type="hidden" name="form-name" value="order" />
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="text-sm font-semibold text-chocolate-700">Name</span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className={inputClass}
                aria-invalid={Boolean(fieldErrors.name)}
              />
              <FieldError message={fieldErrors.name} />
            </label>

            <label className="block sm:col-span-1">
              <span className="text-sm font-semibold text-chocolate-700">Email</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={inputClass}
                aria-invalid={Boolean(fieldErrors.email)}
              />
              <FieldError message={fieldErrors.email} />
            </label>

            <label className="block sm:col-span-1">
              <span className="text-sm font-semibold text-chocolate-700">Phone number</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className={inputClass}
                aria-invalid={Boolean(fieldErrors.phone)}
              />
              <FieldError message={fieldErrors.phone} />
            </label>

            <label className="block sm:col-span-1">
              <span className="text-sm font-semibold text-chocolate-700">Date needed</span>
              <input
                name="dateNeeded"
                type="date"
                min={minDate}
                value={form.dateNeeded}
                onChange={(event) => updateField("dateNeeded", event.target.value)}
                className={inputClass}
                aria-invalid={Boolean(fieldErrors.dateNeeded)}
              />
              <FieldError message={fieldErrors.dateNeeded} />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-chocolate-700">
              Order details / custom requests
            </span>
            <textarea
              name="details"
              rows={5}
              value={form.details}
              onChange={(event) => updateField("details", event.target.value)}
              placeholder="Brownies by the box, a birthday cake, flavors, servings, inscription…"
              className={`${inputClass} resize-y`}
              aria-invalid={Boolean(fieldErrors.details)}
            />
            <FieldError message={fieldErrors.details} />
          </label>

          <div className="hidden" aria-hidden="true">
            <label>
              Don’t fill this out
              <input
                name="bot-field"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(event) => updateField("website", event.target.value)}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-full bg-chocolate-700 px-6 py-3.5 text-base font-semibold text-cream-100 shadow-soft transition-colors hover:bg-chocolate-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending…" : "Send order request"}
          </button>

          <div className="mt-4 min-h-[1.5rem]" aria-live="polite">
            {message ? (
              <p
                className={`text-sm ${
                  status === "success" ? "text-chocolate-700" : "text-blush-600"
                }`}
              >
                {message}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
