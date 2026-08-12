import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ROUTE } from "@/constants/route";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect(`${ROUTE.dashboard}`);
  }

  redirect(`${ROUTE.signIn}`);
}
