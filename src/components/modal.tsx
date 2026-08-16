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
    <div>
      <p>
        <span>この応募を削除しますか？</span>
        <span>この操作は取り消せません。</span>
      </p>

      <div>
        <Link href={`${ROUTE.applicationList}/${id}`}>キャンセル</Link>

        <Button type="button" label="削除" onClick={handleDelete} />
      </div>
    </div>
  );
}
