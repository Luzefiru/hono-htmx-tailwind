import { jsxRenderer } from 'hono/jsx-renderer';

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html>
      <head>
        {import.meta.env.PROD ? (
          <>
            <link href="/static/style.css" rel="stylesheet" />
            <script defer type="module" src="/static/bundle.js"></script>
          </>
        ) : (
          <>
            <link href="/src/style.css" rel="stylesheet" />
            <script defer type="module" src="/src/bundle.ts"></script>
          </>
        )}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
});
