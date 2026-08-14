"use server";

import { COMPANY } from "@/constants/company";
import { createClient } from "@/lib/supabase/server";
import { FormState } from "@/types/form";

export async function edit(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const id = formData.get("id");
  const companyName = formData.get(COMPANY.name.name) as string;
  const status = formData.get(COMPANY.status.en) as string;
  const interviewDate = formData.get(COMPANY.interviewDate.name) as string;
  const interviewDateValue = interviewDate ? `${interviewDate}:00+09:00` : null;
  const memo = formData.get(COMPANY.memo.en) as string;
  const supabase = await createClient();

  const { error } = await supabase
    .from("applications")
    .update({
      company_name: companyName,
      status: status,
      interview_date: interviewDateValue,
      memo: memo,
    })
    .eq("id", id);

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
