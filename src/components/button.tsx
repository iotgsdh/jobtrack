export function Button({
  type,
  label,
}: {
  type: "submit" | "reset" | "button";
  label: string;
}) {
  return <button type={type}>{label}</button>;
}
