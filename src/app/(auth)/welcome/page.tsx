export default function Welcome() {
  return (
    <div className="gutter flex h-dvh flex-col justify-center">
      {/* page title */}
      <h1 className="hidden">welcome</h1>
      {/* message */}
      <p className="flex flex-col gap-y-4">
        <span>確認メールを送信しました</span>
        <span>
          ご登録ありがとうございます。
          <br />
          ご登録いただいたメールアドレスに確認メールを送信しました。
          <br />
          メールに記載されているリンクをクリックして、メールアドレスの確認を完了してください。
        </span>
        <span>
          メールが届かない場合は、迷惑メールフォルダをご確認ください。
        </span>
      </p>
    </div>
  );
}
