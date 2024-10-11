"use server";
import { CreateGroup } from "@/types/group.types";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createGroup(data: CreateGroup) {
  const { getToken } = auth();

  const token = await getToken();

  const res = await fetch(`${process.env.API_URL}/groups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create group");
  }

  revalidatePath(`/dashboard/pages/${data.pageId}}`, "page");
}
