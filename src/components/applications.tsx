"use client";

import { createClient } from "@/lib/supabase/client";
import { Application } from "@/types/application";
import { useEffect, useState } from "react";

function Item({ item }: { item: Application }) {
  const applicationDate = format(item.created_at);
  const interviewDate = format(item.interview_date);

  function format(
    orig: string | null,
  ): { year: number; month: string; day: string } | null {
    if (!orig) {
      return null;
    }

    const date = new Date(orig);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return { year, month, day };
  }

  return (
    <li>
      <h2>{item.company_name}</h2>
      <span>{item.status}</span>
      <div>
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
      <ul>
        {items?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
