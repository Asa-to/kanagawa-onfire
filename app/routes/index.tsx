import { createRoute } from "honox/factory";
import { Header } from "../components/Header";

export default createRoute((c) => {
  return c.render(
    <div>
      <Header>神奈川オンファイア</Header>
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
