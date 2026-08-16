"use client";

import { Calendar } from "@/components/calendar";
import { Schedules } from "@/components/schedules";
import { Statistics } from "@/components/statistics";
import { createClient } from "@/lib/supabase/client";
import { Application } from "@/types/application";
import { useState } from "react";

export default function Dashboard() {
  const [items, setItems] = useState<Application[] | null>([]);

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
      {/* page title */}
      <h1 className="hidden">dashboard</h1>
      {/* statistics */}
      <Statistics />
      {/* calendar */}
      <Calendar onClick={handleClick} />
      {/* schedules */}
      {items && <Schedules items={items} />}
    </div>
  );
}
