"use client";

import { signIn } from "@/app/(auth)/sign-in/actions";
import { InputLabel } from "./label";
import { FORM } from "@/constants/form";
import { Input } from "./input";
import { Button } from "./button";
import { FormState } from "../types/form";
import { useActionState, useState } from "react";
import { Visibility, VisibilityOff } from "./icons";

const initialState: FormState = {
  error: null,
};

export function SignInForm() {
  const [state, action, pending] = useActionState(signIn, initialState);
  const [visibility, setVisibility] = useState(false);

  return (
    <form action={action} className="mb-4">
      <div className="form-inner">
        {/* email */}
        <div className="form-group">
          <InputLabel htmlFor={FORM.email.en} label={FORM.email.ja} />
          <Input
            type="email"
            id={FORM.email.en}
            name={FORM.email.en}
            placeholder={FORM.email.placeholder}
          />
        </div>
        {/* password */}
        <div className="form-group">
          <InputLabel htmlFor={FORM.password.en} label={FORM.password.ja} />
          <div className="relative">
            <Input
              type={visibility ? "text" : "password"}
              id={FORM.password.en}
              name={FORM.password.en}
              minLength={FORM.minLength}
            />
            {visibility ? (
              <button
                type="button"
                aria-label="パスワードを非表示"
                onClick={() => setVisibility(false)}
                className="absolute top-0 right-4 h-full"
              >
                <Visibility />
              </button>
            ) : (
              <button
                type="button"
                aria-label="パスワードを表示"
                onClick={() => setVisibility(true)}
                className="absolute top-0 right-4 h-full"
              >
                <VisibilityOff />
              </button>
            )}
          </div>
        </div>
        {/* submit button */}
        <Button type="submit" label={FORM.label.signIn} pending={pending} />
        {/* error message */}
        {state.error && <p className="text-danger">{FORM.error}</p>}
      </div>
    </form>
  );
}
