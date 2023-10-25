import { qwikMiddleware } from "@hono/qwik-city";
import qwikCityPlan from "@qwik-city-plan";
import { serveStatic } from "hono/cloudflare-workers";

import app from "./entry.hono";
import render from "./entry.ssr";

app.get("*", qwikMiddleware({ render, qwikCityPlan }));
app.get("*", serveStatic({ root: "./" }));

export default app;
