import { Suspense } from "react";
import Dashboard from "./dashboard";

export default function DashboardPage() {
  return (
    <div className="inner">
      <Suspense fallback={<p>Loading...</p>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}
