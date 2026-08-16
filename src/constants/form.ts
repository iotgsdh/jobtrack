export const FORM = {
  email: {
    en: "email",
    ja: "メールアドレス",
    placeholder: "example@gmail.com",
  },
  password: {
    en: "password",
    ja: "パスワード",
  },
  passwordConfirm: {
    en: "passwordConfirm",
    ja: "パスワード確認",
    name: "password_confirm",
  },
  label: {
    signIn: "サインイン",
    signUp: "サインアップ",
  },
  minLength: 8,
  error: "メールアドレスまたはパスワードが正しくありません。",
} as const;
