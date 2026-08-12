"use server";

import { createClient } from "@/lib/supabase/server";
import { formState } from "../../../types/form";
import { redirect } from "next/navigation";

export async function signIn(
  _prevState: formState,
  formData: FormData,
): Promise<formState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
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

    redirect("/dashboard");
  }

  return signInWithEmail();
}
