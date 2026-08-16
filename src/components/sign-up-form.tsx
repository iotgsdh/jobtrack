"use client";

import { InputLabel } from "./label";
import { FORM } from "@/constants/form";
import { Input } from "./input";
import { Button } from "./button";
import { FormState } from "../types/form";
import { useActionState, useState } from "react";
import { signUp } from "@/app/(auth)/sign-up/actions";
import { Visibility, VisibilityOff } from "./icons";

const initialState: FormState = {
  error: null,
};

export function SignUpForm() {
  const [state, action, pending] = useActionState(signUp, initialState);
  const [visibility, setVisibility] = useState(false);
  const [confirmVisibility, setConfirmVisibility] = useState(false);

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
        {/* password confirm */}
        <div className="form-group">
          <InputLabel
            htmlFor={FORM.passwordConfirm.en}
            label={FORM.passwordConfirm.ja}
          />
          <div className="relative">
            <Input
              type={confirmVisibility ? "text" : "password"}
              id={FORM.passwordConfirm.en}
              name={FORM.passwordConfirm.name}
              minLength={FORM.minLength}
            />
            {confirmVisibility ? (
              <button
                type="button"
                aria-label="パスワードを非表示"
                onClick={() => setConfirmVisibility(false)}
                className="absolute top-0 right-4 h-full"
              >
                <Visibility />
              </button>
            ) : (
              <button
                type="button"
                aria-label="パスワードを表示"
                onClick={() => setConfirmVisibility(true)}
                className="absolute top-0 right-4 h-full"
              >
                <VisibilityOff />
              </button>
            )}
          </div>
        </div>
        {/* submit button */}
        <Button type="submit" label={FORM.label.signUp} pending={pending} />
        {/* error message */}
        {state.error && <p className="text-danger">{FORM.error}</p>}
      </div>
    </form>
  );
}
