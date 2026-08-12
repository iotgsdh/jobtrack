import { SITE } from "@/constants/site";
import { SignInForm } from "@/components/sign-in-form";
import Link from "next/link";
import { FORM } from "@/constants/form";
import { ROUTE } from "@/constants/route";

export default function SignIn() {
  return (
    <div>
      {/* site title */}
      <h1>{SITE.title}</h1>
      {/* sign in form */}
      <SignInForm />
      {/* sign up link */}
      <Link href={ROUTE.signUp}>{FORM.label.signUp}</Link>
    </div>
  );
}
