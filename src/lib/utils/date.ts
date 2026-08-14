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
  const year = date.getFullYear().toString();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hour = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);

  return { year, month, day, hour, minutes };
}
