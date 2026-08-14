import { Applications } from "@/components/applications";

export default function ApplicationList() {
  return (
    <div>
      {/* page title */}
      <h1 className="hidden">application list</h1>
      {/* applications */}
      <Applications />
    </div>
  );
}
