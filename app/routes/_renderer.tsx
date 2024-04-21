import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <Script src="/app/client.ts" async />
        <Style />
        {import.meta.env.PROD ? (
          <link rel="stylesheet" href="/static/assets/styles/tailwind.css" />
        ) : (
          <link href="/app/styles/tailwind.css" rel="stylesheet" />
        )}
        <link href="https://unpkg.com/mvp.css" rel="stylesheet" />
        {import.meta.env.PROD ? (
          <link rel="stylesheet" href="/static/assets/styles/reset.css" />
        ) : (
          <link href="/app/styles/reset.css" rel="stylesheet" />
        )}
      </head>
      <body class="max-w-md mx-auto mt-8">{children}</body>
    </html>
  );
});
