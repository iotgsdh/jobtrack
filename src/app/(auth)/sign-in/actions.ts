"use server";

import { createClient } from "@/lib/supabase/server";
import { formState } from "../../../types/form";
import { redirect } from "next/navigation";
import { ROUTE } from "@/constants/route";
import { FORM } from "@/constants/form";

export async function signIn(
  _prevState: formState,
  formData: FormData,
): Promise<formState> {
  const email = formData.get(FORM.email.en) as string;
  const password = formData.get(FORM.password.en) as string;
  const supabase = await createClient();

  async function signInWithEmail() {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      return {
        error: error.message,
      };
    }

    redirect(`${ROUTE.dashboard}`);
  }

  return signInWithEmail();
}
