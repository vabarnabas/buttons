import EditPageForm from "@/components/forms/page/edit-page-form";
import { Page } from "@/types/page.types";
import React from "react";

export default async function EditPagePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const pageResponse = await fetch(`${process.env.API_URL}/pages/${id}`, {
    cache: "no-store",
  });

  if (!pageResponse.ok) {
    throw new Error("Failed to fetch page");
  }

  const page: Page = await pageResponse.json();

  return <EditPageForm page={page} />;
}
