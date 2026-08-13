"use client";

import { InputLabel } from "./label";
import { Input } from "./input";
import { Button } from "./button";
import { formState } from "../types/form";
import { useActionState } from "react";
import { register } from "@/app/(main)/register/actions";
import { COMPANY } from "@/constants/company";

const initialState: formState = {
  error: null,
};

export function RegisterForm() {
  const [state, action, pending] = useActionState(register, initialState);

  return (
    <form action={action}>
      {/* company name */}
      <div>
        <InputLabel htmlFor={COMPANY.name.en} label={COMPANY.name.ja} />
        <Input type="text" id={COMPANY.name.en} name={COMPANY.name.name} />
      </div>
      {/* memo */}
      <div>
        <InputLabel htmlFor={COMPANY.memo.en} label={COMPANY.memo.ja} />
        <textarea name={COMPANY.memo.en} id={COMPANY.memo.en}></textarea>
      </div>
      {/* submit button */}
      <Button type="submit" label="登録" pending={pending} />
      {/* error message */}
      {state.error && <p>{state.error}</p>}
      {/* success message */}
      {state.success && <p>成功！</p>}
    </form>
  );
}
