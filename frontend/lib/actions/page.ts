"use server";

import { CreatePage } from "@/types/page.types";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPage(dto: CreatePage) {
  const { userId, getToken } = auth();

  const token = await getToken();

  const res = await fetch(`${process.env.API_URL}/pages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...dto, userId }),
  });

  if (!res.ok) {
    throw new Error("Failed to create page");
  }

  const page = await res.json();
  revalidatePath("/dashboard", "page");
  redirect("/dashboard");
}
