import Link from "next/link";
import { Logo } from "./logo";
import { ROUTE } from "@/constants/route";

export function Header() {
  return (
    <header>
      <Logo />
      <Link href={ROUTE.register}>応募登録</Link>
    </header>
  );
}
