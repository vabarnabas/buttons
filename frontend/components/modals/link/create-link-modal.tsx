"use client";
import CreateLinkForm from "@/components/forms/link/create-link-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import React from "react";

export default function CreateLinkModal({
  pageId,
  groupId,
}: {
  pageId: string;
  groupId: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="sm">
          Add Link
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-2xl font-semibold">
          Create Link
        </DialogHeader>
        <CreateLinkForm
          pageId={pageId}
          groupId={groupId}
          setIsOpen={setIsOpen}
        />
      </DialogContent>
    </Dialog>
  );
}
