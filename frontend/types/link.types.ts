import { group } from "console";
import { z } from "zod";

export const createLinkSchema = z.object({
  name: z.string(),
  url: z.string(),
  description: z.string().optional(),

  groupId: z.string(),
});

export const updateLinkSchema = z.object({
  name: z.string().optional(),
  url: z.string().optional(),
  description: z.string().optional(),
});

export const linkSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
  description: z.string().optional(),
  groupId: z.string(),
});

export type LinkType = z.infer<typeof linkSchema>;
export type CreateLink = z.infer<typeof createLinkSchema>;
export type UpdateLink = z.infer<typeof updateLinkSchema>;
