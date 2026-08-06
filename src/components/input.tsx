export function Input({ type, id }: { type: string; id: string }) {
  return <input type={type} id={id} autoComplete="on" />;
}
