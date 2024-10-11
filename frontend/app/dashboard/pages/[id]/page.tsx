import CreateGroupModal from "@/components/modals/group/create-group-modal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Page } from "@/types/page.types";
import { Settings2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function PagePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const pageResponse = await fetch(`${process.env.API_URL}/pages/${id}`, {});

  if (!pageResponse.ok) {
    throw new Error("Failed to fetch page");
  }

  const page: Page = await pageResponse.json();

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-semibold mt-2">{page.name}</p>
        <Link
          href={`/dashboard/pages/${page.id}/editor`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "flex items-center gap-x-1 w-max"
          )}
        >
          <Settings2 className="size-4" /> Edit
        </Link>
      </div>
      <p className="mt-1 text-muted-foreground text-sm">{page.description}</p>
      <div className="mt-6">
        <div className="empty:mb-0 mb-6 space-y-4">
          {page.groups?.length
            ? page.groups.map((group) => (
                <div key={group.id} className="">
                  <p className="text-2xl font-medium">{group.name}</p>
                  <p className="mt-1 text-muted-foreground text-sm">
                    {group.description}
                  </p>
                </div>
              ))
            : null}
        </div>
        <CreateGroupModal pageId={id} />
      </div>
    </div>
  );
}
