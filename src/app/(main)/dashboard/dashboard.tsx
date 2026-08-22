"use client";

import { Calendar } from "@/components/calendar";
import { Schedules } from "@/components/schedules";
import { Statistics } from "@/components/statistics";
import { ROUTE } from "@/constants/route";
import { createClient } from "@/lib/supabase/client";
import { Application } from "@/types/application";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  const [showMessage, setShowMessage] = useState(false);
  const [items, setItems] = useState<Application[] | null>([]);

  useEffect(() => {
    if (message !== "deleted") {
      return;
    }

    setShowMessage(true);

    const timer = setTimeout(() => {
      setShowMessage(false);

      const params = new URLSearchParams(searchParams.toString());
      params.delete("message");

      const query = params.toString();

      router.replace(query ? `?${query}` : ROUTE.dashboard);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  async function handleClick({ interviewDate }: { interviewDate: string }) {
    const supabase = createClient();
    const start = `${interviewDate}T00:00:00+09:00`;
    const end = `${interviewDate}T23:59:59.999+09:00`;

    const { data, error } = await supabase
      .from("applications")
      .select()
      .gte("interview_date", start)
      .lte("interview_date", end);
    setItems(data);
  }

  return (
    <div>
      {/* message */}
      {showMessage && message === "deleted" && <p>削除しました。</p>}
      {/* page title */}
      <h1 className="hidden">dashboard</h1>
      {/* statistics */}
      <Statistics />
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-4">
        {/* calendar */}
        <Calendar onClick={handleClick} />
        {/* schedules */}
        {items?.length !== 0 && <Schedules items={items} />}
      </div>
    </div>
  );
}
