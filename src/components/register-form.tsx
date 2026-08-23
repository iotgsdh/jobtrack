"use client";

import { InputLabel } from "./label";
import { Input } from "./input";
import { Button } from "./button";
import { FormState } from "../types/form";
import { useActionState } from "react";
import { register } from "@/app/(main)/register/actions";
import { COMPANY } from "@/constants/company";
import Link from "next/link";
import { ROUTE } from "@/constants/route";

const initialState: FormState = {
  error: null,
};

export function RegisterForm() {
  const [state, action, pending] = useActionState(register, initialState);

  return (
    <form action={action}>
      <div className="form-inner">
        {/* company name */}
        <div className="form-group">
          <InputLabel htmlFor={COMPANY.name.en} label={COMPANY.name.ja} />
          <Input type="text" id={COMPANY.name.en} name={COMPANY.name.name} />
        </div>
        {/* memo */}
        <div className="form-group">
          <InputLabel htmlFor={COMPANY.memo.en} label={COMPANY.memo.ja} />
          <textarea
            name={COMPANY.memo.en}
            id={COMPANY.memo.en}
            rows={8}
            className="border-border bg-surface w-full rounded-lg border dark:bg-transparent"
          ></textarea>
        </div>
        <div className="flex flex-col gap-y-4">
          {/* cancel button */}
          <Link
            href={ROUTE.dashboard}
            className="border-primary text-primary bg-surface flex h-11 w-full items-center justify-center rounded-lg border px-4 font-bold dark:bg-transparent"
          >
            キャンセル
          </Link>
          {/* submit button */}
          <Button type="submit" label="登録" pending={pending} />
        </div>
        {/* error message */}
        {state.error && <p>{state.error}</p>}
        {/* success message */}
        {state.success && <p>登録しました</p>}
      </div>
    </form>
  );
}
