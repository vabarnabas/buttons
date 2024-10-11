"use server";
import { CreateLink } from "@/types/link.types";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createLink(data: CreateLink, pageId: string) {
  const { getToken } = auth();

  const token = await getToken();

  const res = await fetch(`${process.env.API_URL}/links`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create link");
  }

  revalidatePath(`/dashboard/pages/${pageId}}`, "page");
}
