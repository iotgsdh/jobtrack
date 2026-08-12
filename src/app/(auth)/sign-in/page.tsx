import { SITE } from "@/constants/site";
import { SignInForm } from "@/components/sign-in-form";

export default function SignIn() {
  return (
    <div>
      {/* site title */}
      <h1>{SITE.title}</h1>
      {/* sign in form */}
      <SignInForm />
    </div>
  );
}
