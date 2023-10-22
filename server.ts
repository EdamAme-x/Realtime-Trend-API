import { Context } from "https://deno.land/x/hono@v3.8.2/context.ts";
import { Hono } from "https://deno.land/x/hono@v3.8.2/mod.ts";
import { getYahooTrend } from "./Yahoo.trend.ts";
import { getGoogleTrend } from "./Google.trend.ts";

const app = new Hono();

app.get("/", async (c: Context) => {
  const result: Result[] = (await getYahooTrend())
    .concat(await getGoogleTrend())
    .sort((a, b) => {
      // --- //
      return b.rank - a.rank;
    }).reverse();

  return c.json(result);
});

Deno.serve(app.fetch);
