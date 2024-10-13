import GroupContainer from "@/components/group/group";
import LinkButton from "@/components/link-button/link-button";
import CreateGroupModal from "@/components/modals/group/create-group-modal";
import CreateLinkModal from "@/components/modals/link/create-link-modal";
import EditLinksModal from "@/components/modals/link/edit-links-modal";
import TooltipWrapper from "@/components/tooltip-wrapper/tooltip-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Page } from "@/types/page.types";
import { Pencil, Settings2, Share } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function PagePage({
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
    <div className="">
      <div className="flex justify-between items-center">
        <p className="text-3xl font-semibold mt-2">{page.name}</p>
        <div className="flex gap-x-1.5">
          <Link
            href={`/share/${id}`}
            target="_blank"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            <Share className="size-4" />
          </Link>
          <Link
            href={`/dashboard/pages/${page.id}/editor`}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "flex items-center gap-x-1.5 w-max"
            )}
          >
            <Pencil className="size-4" /> Edit
          </Link>
        </div>
      </div>
      <p className="mt-2 text-muted-foreground text-sm">{page.description}</p>
      <Separator className="my-6" />
      <div className="empty:mb-0 mb-6 space-y-2">
        {page.groups?.length ? (
          page.groups.map((group) => (
            <GroupContainer key={group.id} group={group} pageId={id} editable />
          ))
        ) : (
          <div className="flex justify-center">
            <p className="">Its Empty Here</p>
          </div>
        )}
      </div>
      <CreateGroupModal pageId={id} />
    </div>
  );
}
