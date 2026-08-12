export function Input({
  type,
  id,
  name,
  minLength,
}: {
  type: string;
  id: string;
  name?: string;
  minLength?: number;
}) {
  return (
    <input
      type={type}
      id={id}
      name={name ? name : undefined}
      autoComplete="on"
      required
      minLength={minLength ? minLength : undefined}
    />
  );
}
