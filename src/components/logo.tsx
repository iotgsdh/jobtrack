"use client";

import { ROUTE } from "@/constants/route";
import { SITE } from "@/constants/site";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Logo() {
  const pathname = usePathname();
  const HtmlTag = pathname === ROUTE.dashboard ? "h1" : "div";

  return (
    <HtmlTag>
      <Link href={ROUTE.dashboard}>{SITE.title}</Link>
    </HtmlTag>
  );
}
