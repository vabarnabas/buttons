"use client";
import CreateGroupForm from "@/components/forms/group/create-group-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import React from "react";

export default function CreateGroupModal({ pageId }: { pageId: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Add Group</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-2xl font-semibold">
          Create Group
        </DialogHeader>
        <CreateGroupForm pageId={pageId} />
      </DialogContent>
    </Dialog>
  );
}
