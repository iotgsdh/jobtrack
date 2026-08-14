import { ChangeEventHandler } from "react";

export function Input({
  type,
  id,
  name,
  minLength,
  value,
  onChange,
}: {
  type: string;
  id: string;
  name?: string;
  minLength?: number;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <input
      type={type}
      id={id}
      name={name ? name : undefined}
      autoComplete="on"
      required
      minLength={minLength ? minLength : undefined}
      value={value ? value : undefined}
      onChange={onChange}
    />
  );
}
