import { EditForm } from "@/components/edit-form";
import { createClient } from "@/lib/supabase/server";

export default async function ApplicationDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("applications")
    .select()
    .eq("id", id);

  return (
    <div>
      {/* page title */}
      <h1 className="hidden">{data![0].company_name}</h1>
      {/* edit form */}
      <EditForm data={data![0]} />
    </div>
  );
}
