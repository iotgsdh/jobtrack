import { Suspense } from "react";
import Dashboard from "./dashboard";

export default function DashboardPage() {
  return (
    <div className="gutter">
      <Suspense fallback={<p>Loading...</p>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}
