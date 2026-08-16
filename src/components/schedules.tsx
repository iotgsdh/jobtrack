import { ROUTE } from "@/constants/route";
import { format } from "@/lib/utils/date";
import { Application } from "@/types/application";
import Link from "next/link";

function Schedule({ item }: { item: Application }) {
  const hour = format(item.interview_date)?.hour;
  const minutes = format(item.interview_date)?.minutes;

  return (
    <li>
      <Link href={`${ROUTE.applicationList}/${item.id}`}>
        <span>{`${hour}：${minutes}`}</span>
        <span>{item.company_name}</span>
      </Link>
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
