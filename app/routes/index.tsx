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
          <select name="name" required>
            <option value="asato">あさと</option>
            <option value="ash">あすか</option>
            <option value="koyo">こうよう</option>
            <option value="mino">みの</option>
            <option value="k">けーすけ</option>
            <option value="charlie">あやと</option>
          </select>
          <label name="icon">アイコン</label>
          <input
            name="icon"
            type="file"
            accept="image/*"
            required
            class="max-w-full"
          />
          <button type="submit">ログイン</button>
        </form>
      </main>
    </div>,
    { title: "トップページ" }
  );
});
