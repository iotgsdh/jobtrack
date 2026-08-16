"use client";

import { createClient } from "@/lib/supabase/client";
import { format } from "@/lib/utils/date";
import { useEffect, useState } from "react";

export function Calendar({
  onClick,
}: {
  onClick: ({ interviewDate }: { interviewDate: string }) => Promise<void>;
}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();
  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };
  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const [items, setItems] = useState<
    { id: number; interview_date: string }[] | null
  >([]);

  useEffect(() => {
    async function getItems() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("applications")
        .select("id, interview_date");
      setItems(data);
    }

    getItems();
  }, []);

  return (
    <div>
      <div>
        <button type="button" onClick={prevMonth}>
          ←
        </button>
        <span>
          {currentDate.toLocaleString("ja-JP", {
            year: "numeric",
            month: "long",
          })}
        </span>
        <button type="button" onClick={nextMonth}>
          →
        </button>
      </div>
      <div>
        <div>
          {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div>
          {Array(firstDayOfMonth)
            .fill(null)
            .map((_, i) => (
              <span key={`empty-${i}`} />
            ))}
          {days.map((day) => {
            const dateKey = [
              currentDate.getFullYear(),
              String(currentDate.getMonth() + 1).padStart(2, "0"),
              String(day).padStart(2, "0"),
            ].join("-");

            const item = items?.find((item) => {
              const formattedInterviewDate = format(item.interview_date);

              if (!formattedInterviewDate) {
                return false;
              }

              const interviewDateKey = `${formattedInterviewDate.year}-${formattedInterviewDate.month}-${formattedInterviewDate.day}`;

              return interviewDateKey === dateKey;
            });

            return (
              <button
                type="button"
                key={day}
                onClick={() => {
                  if (item) {
                    onClick({ interviewDate: dateKey });
                  }
                }}
              >
                {day}
                {item && <span>◯</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
