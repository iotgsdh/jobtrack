export function InputLabel({
  htmlFor,
  label,
}: {
  htmlFor: string;
  label: string;
}) {
  return <label htmlFor={htmlFor}>{label}</label>;
}
