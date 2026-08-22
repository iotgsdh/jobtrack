import { Applications } from "@/components/applications";

export default function ApplicationList() {
  return (
    <div className="gutter">
      {/* page title */}
      <h1 className="hidden">application list</h1>
      {/* applications */}
      <Applications />
    </div>
  );
}
