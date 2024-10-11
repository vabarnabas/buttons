import { Hono } from "hono";
import { PageService } from "../services/page.service";
import { zValidator } from "@hono/zod-validator";
import { createPageSchema, updatePageSchema } from "../types/page.types";

export const pageController = new Hono();
const pageService = PageService();

pageController.get("/", async (c) => {
  return c.json(await pageService.findAll());
});

pageController.get("/:id", async (c) => {
  const { id } = c.req.param();
  return c.json(await pageService.findById(id));
});

pageController.post("/", zValidator("json", createPageSchema), async (c) => {
  const data = c.req.valid("json");
  try {
    return c.json(await pageService.create(data));
  } catch {
    return c.json({ message: "Failed to create page" }, 500);
  }
});

pageController.put("/:id", zValidator("json", updatePageSchema), async (c) => {
  const { id } = c.req.param();
  const data = c.req.valid("json");
  try {
    return c.json(await pageService.update(id, data));
  } catch {
    return c.json({ message: "Failed to update page" }, 500);
  }
});

pageController.delete("/:id", async (c) => {
  const { id } = c.req.param();
  try {
    return c.json(await pageService.remove(id));
  } catch {
    return c.json({ message: "Failed to delete page" }, 500);
  }
});
