"use client";
import CreateLinkForm from "@/components/forms/link/create-link-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import React from "react";

export default function CreateLinkModal({
  pageId,
  groupId,
  small: sm,
}: {
  pageId: string;
  groupId: string;
  small?: boolean;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {sm ? (
          <Button variant="outline" size="sm">
            <Plus className="size-4" />
          </Button>
        ) : (
          <Button variant="secondary" size="sm">
            Add Link
          </Button>
        )}
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
