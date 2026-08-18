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
  const now = format(new Date().toString());
  const today = `${now?.year}-${now?.month}-${now?.day}`;

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
    <div className="border-border bg-surface rounded-xl border">
      <div className="border-border flex gap-x-2 border-b py-4">
        <button type="button" onClick={prevMonth}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="icon"
          >
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </button>
        <span>
          {currentDate.toLocaleString("ja-JP", {
            year: "numeric",
            month: "long",
          })}
        </span>
        <button type="button" onClick={nextMonth}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="icon"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </button>
      </div>
      <div>
        <div className="border-border grid grid-cols-7 border-b">
          {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
            <span key={day} className="py-4 text-center">
              {day}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7">
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
                  onClick({ interviewDate: dateKey });
                }}
                className="relative flex justify-center py-4"
              >
                <span
                  className={`${dateKey === today && "bg-primary text-surface"} grid size-8 place-content-center rounded-full`}
                >
                  {day}
                </span>
                {item && (
                  <span className="text-primary absolute right-0 bottom-0 left-0 text-xs">
                    ●
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
