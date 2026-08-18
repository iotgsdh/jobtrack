"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { ROUTE } from "@/constants/route";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-border border-b">
      <div className="gutter flex justify-between">
        <Logo />
        <div>
          <Link href={ROUTE.applicationList} className="mb-4 block text-right">
            応募一覧
          </Link>
          {pathname !== ROUTE.register && (
            <Link
              href={ROUTE.register}
              className="bg-primary flex gap-x-1 rounded-lg px-4 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="icon"
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
              <span>応募登録</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
