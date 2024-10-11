import { z } from "zod";
import { linkSchema } from "./link.types";

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
  links: z.array(linkSchema),
});

export type Group = z.infer<typeof groupSchema>;
export type CreateGroup = z.infer<typeof createGroupSchema>;
export type UpdateGroup = z.infer<typeof updateGroupSchema>;
