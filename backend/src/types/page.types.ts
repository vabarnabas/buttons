import { z } from "zod";
import { groupSchema } from "./group.types";

export const createPageSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
});

export const updatePageSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

export const pageSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  userId: z.string(),
  groups: z.array(groupSchema),
});

export type Page = z.infer<typeof pageSchema>;
export type CreatePage = z.infer<typeof createPageSchema>;
export type UpdatePage = z.infer<typeof updatePageSchema>;
