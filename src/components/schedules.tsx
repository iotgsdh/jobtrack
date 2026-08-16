import { format } from "@/lib/utils/date";
import { Application } from "@/types/application";

function Schedule({ item }: { item: Application }) {
  const hour = format(item.interview_date)?.hour;
  const minutes = format(item.interview_date)?.minutes;

  return (
    <li>
      <span>{`${hour}：${minutes}`}</span>
      <span>{item.company_name}</span>
    </li>
  );
}

export function Schedules({ items }: { items: Application[] | null }) {
  return (
    <ul>
      {items?.map((item) => (
        <Schedule key={item.id} item={item} />
      ))}
    </ul>
  );
}
