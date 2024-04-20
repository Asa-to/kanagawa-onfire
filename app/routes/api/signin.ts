import { zValidator } from "@hono/zod-validator";
import { createRoute } from "honox/factory";
import { z } from "zod";

export const POST = createRoute(
  zValidator(
    "form",
    z.object({
      name: z.string().max(20).min(1),
      icon: z.string().min(0),
    }),
    (result, c) => {
      if (!result.success) {
        return c.newResponse(
          "バリデーションエラーとか起こしてんじゃねぇぞ死ねや！！！",
          500
        );
      }
    }
  ),
  async (c) => {
    const formData = await c.req.formData();
    return c.redirect("/home");
  }
);
