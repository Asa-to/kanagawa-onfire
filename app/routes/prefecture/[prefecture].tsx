import { createRoute } from "honox/factory";

export default createRoute((c) => c.render(<>{c.req.param()["prefecture"]}</>));
