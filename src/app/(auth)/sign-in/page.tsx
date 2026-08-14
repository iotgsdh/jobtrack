import { SITE } from "@/constants/site";
import { SignInForm } from "@/components/sign-in-form";
import Link from "next/link";
import { FORM } from "@/constants/form";
import { ROUTE } from "@/constants/route";

export default function SignIn() {
  return (
    <div>
      {/* page title */}
      <h1 className="hidden">sign in</h1>
      {/* site title */}
      <span>{SITE.title}</span>
      {/* sign in form */}
      <SignInForm />
      {/* sign up link */}
      <Link href={ROUTE.signUp}>{FORM.label.signUp}</Link>
    </div>
  );
}
