"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { ROUTE } from "@/constants/route";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header>
      <Logo />
      <Link href={ROUTE.applicationList}>応募一覧</Link>
      {pathname !== ROUTE.register && (
        <Link href={ROUTE.register}>応募登録</Link>
      )}
    </header>
  );
}
