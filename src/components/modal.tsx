"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./button";
import { ROUTE } from "@/constants/route";
import { createClient } from "@/lib/supabase/client";

export function Modal({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    const supabase = createClient();

    const { error } = await supabase.from("applications").delete().eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    router.push(`${ROUTE.dashboard}?message=deleted`);
  }

  return (
    <div className="bg-modal-bg fixed inset-0 flex items-center">
      <div className="gutter inner bg-background w-full rounded-2xl border p-4">
        <p className="mb-8">
          <span className="block text-center">この応募を削除しますか？</span>
          <span className="block text-center">この操作は取り消せません。</span>
        </p>

        <div className="flex flex-col gap-y-4">
          <Link
            href={`${ROUTE.applicationList}/${id}`}
            className="border-primary text-primary flex h-11 w-full items-center justify-center rounded-lg border px-4 font-bold"
          >
            キャンセル
          </Link>
          <button
            type="button"
            onClick={handleDelete}
            className="border-danger text-danger h-11 w-full rounded-lg border px-4 font-bold"
          >
            削除
          </button>
        </div>
      </div>
    </div>
  );
}
