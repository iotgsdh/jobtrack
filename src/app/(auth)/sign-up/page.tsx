import { SignUpForm } from "@/components/sign-up-form";
import { FORM } from "@/constants/form";
import { ROUTE } from "@/constants/route";
import Link from "next/link";

export default function SignUp() {
  return (
    <div>
      {/* sign up form */}
      <SignUpForm />
      {/* sign in link */}
      <Link href={ROUTE.signIn}>{FORM.label.signIn}</Link>
    </div>
  );
}
