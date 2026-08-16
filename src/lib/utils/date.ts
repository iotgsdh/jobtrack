export function format(orig: string | null): {
  year: string;
  month: string;
  day: string;
  hour: string;
  minutes: string;
} | null {
  if (!orig) {
    return null;
  }

  const date = new Date(orig);

  const formatter = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);

  const get = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return {
    year: get("year"),
    month: get("month"),
    day: get("day"),
    hour: get("hour"),
    minutes: get("minute"),
  };
}
