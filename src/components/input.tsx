import { ChangeEventHandler } from "react";

export function Input({
  type,
  id,
  name,
  minLength,
  value,
  placeholder,
  onChange,
}: {
  type: string;
  id: string;
  name?: string;
  minLength?: number;
  value?: string;
  placeholder?: string;
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
      placeholder={placeholder ? placeholder : undefined}
      onChange={onChange}
      className="border-border bg-surface h-11 w-full rounded-lg border px-4"
    />
  );
}
