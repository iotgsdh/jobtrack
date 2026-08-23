import { EditForm } from "@/components/edit-form";
import { Modal } from "@/components/modal";
import { createClient } from "@/lib/supabase/server";

export default async function ApplicationDetails({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ modal: string }>;
}) {
  const { id } = await params;
  const { modal } = await searchParams;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("applications")
    .select()
    .eq("id", id)
    .single();

  return (
    <div className="gutter inner">
      {/* page title */}
      <h1 className="hidden">{data.company_name}</h1>
      {/* edit form */}
      <EditForm data={data} />
      {/* modal */}
      {modal === "delete" && <Modal id={id} />}
    </div>
  );
}
