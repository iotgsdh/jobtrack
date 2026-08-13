"use server";

import { createClient } from "@/lib/supabase/server";
import { FormState } from "../../../types/form";
import { COMPANY } from "@/constants/company";

export async function register(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const companyName = formData.get(COMPANY.name.name) as string;
  const memo = formData.get(COMPANY.memo.en) as string;
  const supabase = await createClient();

  const { error } = await supabase
    .from("applications")
    .insert({ company_name: companyName, memo: memo });

  if (error) {
    return {
      error: error.message,
    };
  }

  return {
    error: null,
    success: true,
  };
}
