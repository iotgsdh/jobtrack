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
    <div>
      <span>{label}</span>
      <span>{statistics ? statistics : 0}</span>
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

  return (
    <div>
      <StatisticsCard label="応募数" statistics={submitted?.length} />
      <StatisticsCard label="面接数" statistics={interview?.length} />
      <StatisticsCard label="内定数" statistics={jobOffer?.length} />
    </div>
  );
}
