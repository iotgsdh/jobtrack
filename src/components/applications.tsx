"use client";

import { ROUTE } from "@/constants/route";
import { createClient } from "@/lib/supabase/client";
import { format } from "@/lib/utils/date";
import { Application } from "@/types/application";
import Link from "next/link";
import { useEffect, useState } from "react";

function Item({ item }: { item: Application }) {
  const applicationDate = format(item.created_at);
  const interviewDate = format(item.interview_date);
  let status;
  switch (item.status) {
    case "応募済み":
      status = "gray";
      break;
    case "一次面接":
      status = "blue";
      break;
    case "二次面接":
      status = "purple";
      break;
    case "最終面接":
      status = "orange";
      break;
    case "内定":
      status = "green";
      break;
    case "不採用":
      status = "red";
      break;

    default:
      break;
  }

  return (
    <li>
      <Link
        href={`${ROUTE.applicationList}/${item.id}`}
        className="border-border block rounded-xl border p-4"
      >
        <div className="mb-4 flex items-center justify-between gap-x-4">
          <h2 className="font-bold">{item.company_name}</h2>
          <span className={`rounded-full px-2 py-1 text-sm ${status}`}>
            {item.status}
          </span>
        </div>
        <div className="mb-2">
          <span>応募日：</span>
          <time
            dateTime={`${applicationDate!.year}-${applicationDate!.month}-${applicationDate!.day}`}
          >{`${applicationDate!.year}/${applicationDate!.month}/${applicationDate!.day}`}</time>
        </div>
        <div>
          <span>面接日：</span>
          {interviewDate ? (
            <time
              dateTime={`${interviewDate.year}-${interviewDate.month}-${interviewDate.day}`}
            >{`${interviewDate.year}/${interviewDate.month}/${interviewDate.day}`}</time>
          ) : (
            <span>未設定</span>
          )}
        </div>
      </Link>
    </li>
  );
}

export function Applications() {
  const [items, setItems] = useState<Application[] | null>([]);

  useEffect(() => {
    async function getItems() {
      const supabase = createClient();
      const { data, error } = await supabase.from("applications").select();
      setItems(data);
    }

    getItems();
  }, []);

  return (
    <div>
      <ul className="grid gap-y-4">
        {items?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
