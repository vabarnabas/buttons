"use client";
import CreateGroupForm from "@/components/forms/group/create-group-form";
import CreateLinkForm from "@/components/forms/link/create-link-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { LinkType } from "@/types/link.types";
import { LinkIcon, Pencil } from "lucide-react";
import React from "react";

export default function EditLinksModal({ links }: { links: LinkType[] }) {
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
        {links?.length ? (
          links.map((link) => (
            <div key={link.id} className="flex justify-between items-center">
              <div className="">
                <p className="font-semibold">{link.name}</p>
                <p className="text-muted-foreground text-sm">{link.url}</p>
              </div>
            </div>
          ))
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
