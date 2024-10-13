import GroupContainer from "@/components/group/group";
import { Separator } from "@/components/ui/separator";
import { Page } from "@/types/page.types";
import React from "react";

export default async function SharePagePage({
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

  return (
    <div>
      <p className="text-3xl font-semibold mt-2">{page.name}</p>
      <p className="mt-2 text-muted-foreground text-sm">{page.description}</p>
      <Separator className="my-6" />
      <div className="empty:mb-0 mb-6 space-y-2">
        {page.groups?.length ? (
          page.groups.map((group) => (
            <GroupContainer key={group.id} group={group} pageId={id} />
          ))
        ) : (
          <div className="flex justify-center">
            <p className="">Its Empty Here</p>
          </div>
        )}
      </div>
    </div>
  );
}
