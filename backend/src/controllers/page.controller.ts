import { Hono } from "hono";
import { PageService } from "../services/page.service";
import { zValidator } from "@hono/zod-validator";
import { createPageSchema, updatePageSchema } from "../types/page.types";
import { getAuth } from "@hono/clerk-auth";

export const pageController = new Hono();
const pageService = PageService();

pageController.get("/:id", async (c) => {
  const { id } = c.req.param();
  return c.json(await pageService.findById(id));
});

pageController.post("/", zValidator("json", createPageSchema), async (c) => {
  const auth = getAuth(c);

  console.log(auth);

  if (!auth || !auth.userId) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  const data = c.req.valid("json");
  try {
    return c.json(await pageService.create({ ...data, userId: auth.userId }));
  } catch {
    return c.json({ message: "Failed to create page" }, 500);
  }
});

pageController.patch(
  "/:id",
  zValidator("json", updatePageSchema),
  async (c) => {
    const { id } = c.req.param();
    const data = c.req.valid("json");
    try {
      return c.json(await pageService.update(id, data));
    } catch {
      return c.json({ message: "Failed to update page" }, 500);
    }
  }
);

pageController.delete("/:id", async (c) => {
  const { id } = c.req.param();
  try {
    return c.json(await pageService.remove(id));
  } catch {
    return c.json({ message: "Failed to delete page" }, 500);
  }
});
