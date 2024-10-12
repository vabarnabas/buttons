"use client";
import CreateGroupForm from "@/components/forms/group/create-group-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { Box } from "lucide-react";
import React from "react";

export default function CreateGroupModal({ pageId }: { pageId: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex w-max items-center gap-x-1.5" size="sm">
          <Box className="size-4" />
          Add Group
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-2xl font-semibold">
          Create Group
        </DialogHeader>
        <CreateGroupForm pageId={pageId} setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
