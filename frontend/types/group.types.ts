import { z } from "zod";

export const createGroupSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  pageId: z.string(),
});

export const updateGroupSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
});

export const groupSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  pageId: z.string(),
});

export type Group = z.infer<typeof groupSchema>;
export type CreateGroup = z.infer<typeof createGroupSchema>;
export type UpdateGroup = z.infer<typeof updateGroupSchema>;
