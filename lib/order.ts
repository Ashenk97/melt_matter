export type OrderPayload = {
  name: string;
  email: string;
  phone: string;
  dateNeeded: string;
  details: string;
  website?: string;
};

export type OrderFieldErrors = Partial<
  Record<"name" | "email" | "phone" | "dateNeeded" | "details", string>
>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d][\d\s().-]{6,}$/;

function trimValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function parseOrderPayload(input: unknown): OrderPayload {
  const body = input && typeof input === "object" ? (input as Record<string, unknown>) : {};

  return {
    name: trimValue(body.name),
    email: trimValue(body.email),
    phone: trimValue(body.phone),
    dateNeeded: trimValue(body.dateNeeded),
    details: trimValue(body.details),
    website: trimValue(body.website),
  };
}

export function validateOrderPayload(payload: OrderPayload): OrderFieldErrors {
  const errors: OrderFieldErrors = {};

  if (payload.name.length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!EMAIL_PATTERN.test(payload.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!PHONE_PATTERN.test(payload.phone)) {
    errors.phone = "Please enter a phone number we can reach you on.";
  }

  if (!payload.dateNeeded) {
    errors.dateNeeded = "Please choose the date you need this by.";
  }

  if (payload.details.length < 10) {
    errors.details = "Tell us a little more about what you’d like to order.";
  }

  return errors;
}
