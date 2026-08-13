"use server";

import { createClient } from "@/lib/supabase/server";
import { FormState } from "../../../types/form";
import { redirect } from "next/navigation";
import { ROUTE } from "@/constants/route";
import { FORM } from "@/constants/form";

export async function signUp(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get(FORM.email.en) as string;
  const password = formData.get(FORM.password.en) as string;
  const passwordConfirm = formData.get(FORM.passwordConfirm.name) as string;
  const supabase = await createClient();

  if (password !== passwordConfirm) {
    return {
      error: "エラー",
    };
  }

  async function signUpNewUser() {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      //   options: {
      //     emailRedirectTo:
      //       "https://jobtrack.tw08iwckpyvz48pfu0sx-262.workers.dev/dashboard",
      //   },
    });

    if (error) {
      return {
        error: error.message,
      };
    }

    redirect(`${ROUTE.welcome}`);
  }

  return signUpNewUser();
}
