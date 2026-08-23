import { RegisterForm } from "@/components/register-form";

export default function Register() {
  return (
    <div className="gutter inner">
      {/* page title */}
      <h1 className="hidden">register</h1>
      {/* register form */}
      <RegisterForm />
    </div>
  );
}
