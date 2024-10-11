import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { config } from "dotenv";
import { pageController } from "./controllers/page.controller";
import { groupController } from "./controllers/group.controller";

config();

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.use(cors());
app.use(logger());

app.route("/pages", pageController);
app.route("groups", groupController);

const port = parseInt(process.env.PORT || "3000");

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
