import { Hono } from "hono";
import { GroupService } from "../services/group.service";
import { zValidator } from "@hono/zod-validator";
import { createGroupSchema, updateGroupSchema } from "../types/group.types";
import { getAuth } from "@hono/clerk-auth";

export const groupController = new Hono();
const groupService = GroupService();

groupController.post("/", zValidator("json", createGroupSchema), async (c) => {
  const auth = getAuth(c);

  if (!auth || !auth.userId) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  const data = c.req.valid("json");
  try {
    return c.json(await groupService.create(data));
  } catch {
    return c.json({ message: "Failed to create group" }, 500);
  }
});

groupController.patch(
  "/:id",
  zValidator("json", updateGroupSchema),
  async (c) => {
    const auth = getAuth(c);

    if (!auth || !auth.userId) {
      return c.json({ message: "Unauthorized" }, 401);
    }

    const { id } = c.req.param();
    const data = c.req.valid("json");
    try {
      return c.json(await groupService.update(id, data));
    } catch {
      return c.json({ message: "Failed to update group" }, 500);
    }
  }
);

groupController.delete("/:id", async (c) => {
  const auth = getAuth(c);

  if (!auth || !auth.userId) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  const { id } = c.req.param();
  try {
    return c.json(await groupService.remove(id));
  } catch {
    return c.json({ message: "Failed to delete group" }, 500);
  }
});
