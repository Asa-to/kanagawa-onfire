import { ErrorHandler } from "hono";

const handler: ErrorHandler = (e, c) => {
  return c.render(<p>{e.message}カスがよ</p>);
};

export default handler;
