"use client";

import { signIn } from "@/app/(auth)/sign-in/actions";
import { InputLabel } from "./label";
import { FORM } from "@/constants/form";
import { Input } from "./input";
import { Button } from "./button";
import { formState } from "../../types/form";
import { useActionState } from "react";

const initialState: formState = {
  error: null,
};

export function SignInForm() {
  const [state, action, pending] = useActionState(signIn, initialState);

  return (
    <form action={action}>
      {/* email */}
      <div>
        <InputLabel htmlFor={FORM.email.en} label={FORM.email.ja} />
        <Input type="email" id={FORM.email.en} />
      </div>
      {/* password */}
      <div>
        <InputLabel htmlFor={FORM.password.en} label={FORM.password.ja} />
        <Input type="password" id={FORM.password.en} />
      </div>
      {/* submit button */}
      <Button type="submit" label="サインイン" pending={pending} />
      {/* error message */}
      {state.error && <p>エラー</p>}
    </form>
  );
}
