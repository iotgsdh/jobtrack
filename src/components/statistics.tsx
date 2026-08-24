"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

function StatisticsCard({
  label,
  statistics,
}: {
  label: string;
  statistics: number | undefined;
}) {
  return (
    <div className="border-border bg-surface w-full min-w-20 rounded-xl border py-4 dark:bg-transparent">
      <span className="block text-center font-bold">{label}</span>
      <span className="block text-center text-2xl font-bold">
        {statistics ? Math.round(statistics) : 0}
        {label === "面接率" && "%"}
      </span>
    </div>
  );
}

export function Statistics() {
  const [status, setStatus] = useState<{ status: string }[] | null>([]);

  useEffect(() => {
    async function getItems() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("applications")
        .select("status");
      setStatus(data);
    }

    getItems();
  }, []);

  const submitted = status;
  const interview = status?.filter(
    (value) =>
      value.status === "一次面接" ||
      value.status === "二次面接" ||
      value.status === "最終面接",
  );
  const jobOffer = status?.filter((value) => value.status === "内定");
  const rejected = status?.filter((value) => value.status === "不採用");
  const interviewRate =
    submitted && interview ? (interview?.length / submitted?.length) * 100 : 0;

  return (
    <div className="mb-4 flex gap-x-4 overflow-x-auto px-4 pt-4">
      <StatisticsCard label="応募数" statistics={submitted?.length} />
      <StatisticsCard label="面接数" statistics={interview?.length} />
      <StatisticsCard label="内定数" statistics={jobOffer?.length} />
      <StatisticsCard label="不採用" statistics={rejected?.length} />
      <StatisticsCard label="面接率" statistics={interviewRate} />
    </div>
  );
}
