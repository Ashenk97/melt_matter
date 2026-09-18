import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { parseOrderPayload, validateOrderPayload } from "@/lib/order";

const ORDERS_FILE = path.join(process.cwd(), ".data", "orders.json");

export async function POST(request: Request) {
  if (process.env.NETLIFY) {
    return Response.json(
      { error: "Orders are collected with Netlify Forms on the live site." },
      { status: 400 },
    );
  }

  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return Response.json({ error: "Please send a valid order form." }, { status: 400 });
  }

  const payload = parseOrderPayload(json);

  if (payload.website) {
    return Response.json({ ok: true });
  }

  const fields = validateOrderPayload(payload);
  if (Object.keys(fields).length > 0) {
    return Response.json(
      { error: "Please check the highlighted fields.", fields },
      { status: 400 },
    );
  }

  const order = {
    receivedAt: new Date().toISOString(),
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    dateNeeded: payload.dateNeeded,
    details: payload.details,
  };

  await mkdir(path.dirname(ORDERS_FILE), { recursive: true });

  let existing: unknown[] = [];
  try {
    existing = JSON.parse(await readFile(ORDERS_FILE, "utf8")) as unknown[];
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }

  existing.push(order);
  await writeFile(ORDERS_FILE, JSON.stringify(existing, null, 2));

  return Response.json({ ok: true });
}
