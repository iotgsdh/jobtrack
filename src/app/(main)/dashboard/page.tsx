import { Statistics } from "@/components/statistics";

export default function Dashboard() {
  return (
    <div>
      {/* page title */}
      <h1 className="hidden">dashboard</h1>
      {/* statistics */}
      <Statistics />
    </div>
  );
}
