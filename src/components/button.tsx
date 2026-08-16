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
    <button
      type={type}
      onClick={onClick}
      className="bg-primary text-surface h-11 w-full rounded-lg px-4 font-bold"
    >
      {pending ? `${label}...` : label}
    </button>
  );
}
