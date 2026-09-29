export const announcement = {
  /** Change the id whenever the message changes so visitors who dismissed the old one see the new one. */
  id: "holiday-2026",
  enabled: true,
  message: "🎉 Now accepting custom orders for the holiday season! Book early.",
  link: { href: "/#contact", label: "Order now" },
} as const;

export const ANNOUNCEMENT_STORAGE_KEY = "mm-announcement-dismissed";

/** Runs before first paint so a previously dismissed bar never flashes in. */
export const announcementInitScript = `try{if(localStorage.getItem(${JSON.stringify(
  ANNOUNCEMENT_STORAGE_KEY,
)})===${JSON.stringify(announcement.id)})document.documentElement.dataset.announcementDismissed=""}catch(e){}`;
