export function Button({
  type,
  label,
  pending,
}: {
  type: "submit" | "reset" | "button";
  label: string;
  pending: boolean;
}) {
  return <button type={type}>{pending ? `${label}...` : label}</button>;
}
