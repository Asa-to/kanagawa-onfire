import { createRoute } from "honox/factory";
import BackButton from "../../../islands/BackButton/BackButton";

export default createRoute((c) =>
  c.render(
    <div>
      <BackButton />
      <p>{c.req.param()["travel"]}</p>
    </div>
  )
);
