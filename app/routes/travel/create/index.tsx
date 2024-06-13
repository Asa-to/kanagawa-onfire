import { Header } from "@/components/Header";
import { createRoute } from "honox/factory";

export default createRoute((c) =>
  c.render(
    <div class="mx-4">
      <Header>新規登録</Header>
    </div>
  )
);
