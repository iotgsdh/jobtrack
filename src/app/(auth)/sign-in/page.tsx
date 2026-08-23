import { SITE } from "@/constants/site";
import { SignInForm } from "@/components/sign-in-form";
import Link from "next/link";
import { FORM } from "@/constants/form";
import { ROUTE } from "@/constants/route";

export default function SignIn() {
  return (
    <div className="gutter inner flex h-dvh flex-col justify-center overflow-auto landscape:block">
      {/* page title */}
      <h1 className="hidden">sign in</h1>
      {/* site title */}
      <span className="mb-12 block text-center text-4xl font-bold">
        {SITE.title}
      </span>
      {/* sign in form */}
      <SignInForm />
      {/* sign up link */}
      <div className="flex justify-end">
        <Link
          href={ROUTE.signUp}
          className="text-text-secondary dark:text-surface font-bold"
        >
          {FORM.label.signUp}
        </Link>
      </div>
    </div>
  );
}
