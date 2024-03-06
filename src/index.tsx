import { Hono } from 'hono';
import { renderer } from '@/middleware/renderer';

const app = new Hono();

app.get('/data', (c) => {
  return c.render(
    <div>
      <p className="font-bold underline">{new Date().toISOString()}</p>
      <button hx-get="/" hx-target="body">
        Close
      </button>
    </div>
  );
});

app.get('*', renderer);
app.get('/', (c) => {
  return c.render(
    <div
      hx-boost="true"
      className="flex flex-col items-center justify-center h-screen text-center"
    >
      <h1 className="text-red-500">Hello World!</h1>
      <button hx-get="/data" hx-target="#data-container">
        Fetch Data
      </button>
      <div className="mt-8" id="data-container">
        No data fetched yet...
      </div>
    </div>
  );
});

export default app;
