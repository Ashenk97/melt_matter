/**
 * Paste your Elfsight embed snippets (or just the app IDs) below.
 *
 * Example embed from Elfsight:
 *   <script src="https://static.elfsight.com/platform/platform.js" async></script>
 *   <div class="elfsight-app-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" data-elfsight-app-lazy></div>
 *
 * Only the app id / class is used. The <script> tag is loaded through next/script
 * so it does not run during SSR or hydration.
 */
export const ELFSIGHT_PLATFORM_SCRIPT =
  "https://static.elfsight.com/platform/platform.js";

export const instagramEmbedCode = `
`;

export const facebookReviewsEmbedCode = `
`;

export function extractElfsightAppId(embedCodeOrId: string): string {
  const value = embedCodeOrId.trim();
  if (!value) return "";

  const fromClass = value.match(
    /elfsight-app-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i,
  );
  if (fromClass?.[1]) return fromClass[1];

  const uuid = value.match(
    /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i,
  );
  if (uuid?.[0]) return uuid[0];

  return value.replace(/^elfsight-app-/i, "").trim();
}

export const instagramWidgetId = extractElfsightAppId(
  process.env.NEXT_PUBLIC_ELFSIGHT_INSTAGRAM_ID ?? instagramEmbedCode,
);

export const facebookReviewsWidgetId = extractElfsightAppId(
  process.env.NEXT_PUBLIC_ELFSIGHT_FACEBOOK_ID ?? facebookReviewsEmbedCode,
);
