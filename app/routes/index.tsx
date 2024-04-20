import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <div>
      <header>
        <h1>神奈川オンファイア</h1>
      </header>
      <main>
        <p>サービスを利用するためにはログインしてください</p>
        <form method="post" action="api/signin">
          <label name="name">名前</label>
          <input name="name" />
          <label name="icon">アイコン</label>
          <input name="icon" type="file" accept="image/*" />
          <button type="submit">ログイン</button>
        </form>
      </main>
    </div>,
    { title: "トップページ" }
  );
});
