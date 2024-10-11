"use client";
import DeleteLinkButton from "@/components/buttons/link/delete-link-button";
import CreateGroupForm from "@/components/forms/group/create-group-form";
import EditGroupForm from "@/components/forms/group/edit-group-form";
import CreateLinkForm from "@/components/forms/link/create-link-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { Group } from "@/types/group.types";
import { LinkIcon, Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function EditLinksModal({ group }: { group: Group }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Pencil className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-2xl font-semibold">
          Edit Links
        </DialogHeader>
        <EditGroupForm group={group} />
        {group.links?.length ? (
          <div className="space-y-4">
            {group.links.map((link) => (
              <div
                key={link.id}
                className="flex justify-between items-center gap-x-4"
              >
                <div className="flex gap-x-4 w-full items-start">
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
                    className="flex-shrink-0 flex aspect-square size-8 rounded-md"
                  />
                  <div className="">
                    <p className="font-semibold">{link.name}</p>
                    <p className="text-muted-foreground text-xs">{link.url}</p>
                  </div>
                </div>
                <DeleteLinkButton linkId={link.id} pageId={group.pageId} />
              </div>
            ))}
          </div>
        ) : (
          <div className="h-48 flex flex-col justify-center items-center">
            <div className="size-12 flex justify-center items-center rounded-full bg-primary text-primary-foreground">
              <LinkIcon className="size-6" />
            </div>
            <p className="text-xl font-semibold mt-3">No Links to Edit Yet</p>
            <p className="max-w-96 text-muted-foreground mt-2 text-center">
              It seems like there are no links to edit yet. Please add some
              links first.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
