export function Button({
  type,
  label,
  pending,
  onClick,
}: {
  type: "submit" | "reset" | "button";
  label: string;
  pending?: boolean;
  onClick?: () => void;
}) {
  return (
    <button type={type} onClick={onClick}>
      {pending ? `${label}...` : label}
    </button>
  );
}
