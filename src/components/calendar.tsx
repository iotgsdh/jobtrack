"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export function Calendar() {
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
  const [interviewDate, setInterviewDate] = useState<
    { interview_date: string }[] | null
  >([]);

  useEffect(() => {
    async function getItems() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("applications")
        .select("interview_date");
      setInterviewDate(data);
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
            const date = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              day + 1,
            );
            const dateKey = date.toISOString().split("T")[0];
            const interviewDateKey = interviewDate?.map(
              (date) => date.interview_date.split("T")[0],
            );
            const hasInterview = dateKey === interviewDateKey?.toString();
            return (
              <button type="button" key={day}>
                {day}
                {hasInterview && <span>◯</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
