"use server";

import { CreatePage, UpdatePage } from "@/types/page.types";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getMyPages() {
  const { getToken } = auth();

  const token = await getToken();

  const res = await fetch(`${process.env.API_URL}/pages/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch pages");
  }

  return await res.json();
}

export async function createPage(dto: CreatePage) {
  const { getToken } = auth();

  const token = await getToken();

  const res = await fetch(`${process.env.API_URL}/pages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dto),
  });

  if (!res.ok) {
    throw new Error("Failed to create page");
  }

  const page = await res.json();
  revalidatePath("/dashboard", "page");
  redirect(`/dashboard/pages/${page.id}`);
}

export async function updatePage(id: string, dto: UpdatePage) {
  const { getToken } = auth();

  const token = await getToken();

  const res = await fetch(`${process.env.API_URL}/pages/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dto),
  });

  if (!res.ok) {
    throw new Error("Failed to update page");
  }

  revalidatePath("/dashboard", "page");
  redirect(`/dashboard/pages/${id}`);
}
