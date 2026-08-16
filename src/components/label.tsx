export function InputLabel({
  htmlFor,
  label,
}: {
  htmlFor: string;
  label: string;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      {label}
    </label>
  );
}
