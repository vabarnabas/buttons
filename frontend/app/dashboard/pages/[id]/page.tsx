import CreateGroupModal from "@/components/modals/group/create-group-modal";
import CreateLinkModal from "@/components/modals/link/create-link-modal";
import EditLinksModal from "@/components/modals/link/edit-links-modal";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Page } from "@/types/page.types";
import { Pencil, Settings2 } from "lucide-react";
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
      <p className="mt-1 text-muted-foreground text-sm">{page.description}</p>
      <Separator className="my-6" />
      <div className="">
        <div className="empty:mb-0 mb-6 space-y-6">
          {page.groups?.length ? (
            page.groups.map((group) => (
              <div key={group.id} className="">
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-medium">{group.name}</p>
                  <div className="flex gap-x-1.5">
                    <CreateLinkModal pageId={id} groupId={group.id} />
                    <EditLinksModal group={group} />
                  </div>
                </div>
                <p className="mt-1 text-muted-foreground text-sm">
                  {group.description}
                </p>
                <div className="mt-4 flex gap-1 flex-wrap">
                  {group.links?.length ? (
                    group.links?.map((link) => (
                      <div key={link.id} className="">
                        <Link
                          target="_blank"
                          href={
                            link.url.startsWith("http://") ||
                            link.url.startsWith("https://")
                              ? link.url
                              : `http://${link.url}`
                          }
                          className={cn(
                            buttonVariants({
                              variant: "outline",
                              size: "sm",
                            }),
                            "text-lg flex items-center gap-x-2 w-max"
                          )}
                        >
                          <Image
                            src={`https://icon.horse/icon/${
                              link.url.startsWith("http://") ||
                              link.url.startsWith("https://")
                                ? link.url
                                    .replace("http://", "")
                                    .replace("https://", "")
                                    .split("/")[0]
                                : link.url.split("/")[0]
                            }`}
                            alt={link.name}
                            width={16}
                            height={16}
                          />
                          <p className="text-sm">{link.name}</p>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div className="">
                      <p className="">Its empty here, add some links.</p>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center">
              <p className="">Its Empty Here</p>
            </div>
          )}
        </div>
        <CreateGroupModal pageId={id} />
      </div>
    </div>
  );
}
