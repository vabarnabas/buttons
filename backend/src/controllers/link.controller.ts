import { Hono } from "hono";
import { LinkService } from "../services/link.service";
import { zValidator } from "@hono/zod-validator";
import { createLinkSchema, updateLinkSchema } from "../types/link.types";
import { getAuth } from "@hono/clerk-auth";

export const LinkController = new Hono();
const linkService = LinkService();

LinkController.post("/", zValidator("json", createLinkSchema), async (c) => {
  const auth = getAuth(c);

  if (!auth || !auth.userId) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  const data = c.req.valid("json");
  try {
    return c.json(await linkService.create(data));
  } catch {
    return c.json({ message: "Failed to create link" }, 500);
  }
});

LinkController.patch(
  "/:id",
  zValidator("json", updateLinkSchema),
  async (c) => {
    const auth = getAuth(c);

    if (!auth || !auth.userId) {
      return c.json({ message: "Unauthorized" }, 401);
    }

    const { id } = c.req.param();
    const data = c.req.valid("json");
    try {
      return c.json(await linkService.update(id, data));
    } catch {
      return c.json({ message: "Failed to update link" }, 500);
    }
  }
);

LinkController.delete("/:id", async (c) => {
  const auth = getAuth(c);

  if (!auth || !auth.userId) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  const { id } = c.req.param();
  try {
    return c.json(await linkService.remove(id));
  } catch {
    return c.json({ message: "Failed to delete link" }, 500);
  }
});
