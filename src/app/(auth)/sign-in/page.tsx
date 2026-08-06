import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { InputLabel } from "@/components/label";
import { FORM } from "@/constants/form";
import { SITE } from "@/constants/site";

export default function SignIn() {
  return (
    <div>
      {/* site title */}
      <h1>{SITE.title}</h1>
      {/* sign in form */}
      <form>
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
        <Button type="submit" label="サインイン" />
      </form>
    </div>
  );
}
