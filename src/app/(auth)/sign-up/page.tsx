import { SignUpForm } from "@/components/sign-up-form";
import { FORM } from "@/constants/form";
import { ROUTE } from "@/constants/route";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="gutter flex h-dvh flex-col justify-center overflow-auto landscape:block">
      {/* page title */}
      <h1 className="hidden">sign up</h1>
      {/* sign up form */}
      <SignUpForm />
      {/* sign in link */}
      <div className="flex justify-end">
        <Link
          href={ROUTE.signIn}
          className="text-text-secondary dark:text-surface font-bold"
        >
          {FORM.label.signIn}
        </Link>
      </div>
    </div>
  );
}
