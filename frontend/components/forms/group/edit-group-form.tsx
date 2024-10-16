"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Group, UpdateGroup, updateGroupSchema } from "@/types/group.types";
import { createGroup, updateGroup } from "@/lib/actions/group";
import DeleteGroupButton from "@/components/buttons/group/delete-group-button";

export default function EditGroupForm({
  group,
  setIsOpen,
}: {
  group: Group;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const form = useForm<UpdateGroup>({
    resolver: zodResolver(updateGroupSchema),
    defaultValues: { ...group },
  });

  const onSubmit = form.handleSubmit((data) => {
    const status = toast.promise(
      updateGroup(group.id, group.pageId, {
        name: data.name,
        description: data.description,
      }),
      {
        loading: "Updating Group...",
        success: "Group Updated Successfully",
        error: "Failed to Update Group",
      }
    );

    if (status) {
      setIsOpen(false);
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Group Name</FormLabel>
              <FormControl>
                <Input placeholder="Name of Your Group" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description (optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe Your Group" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full">Update</Button>
        <DeleteGroupButton groupId={group.id} pageId={group.pageId} />
      </form>
    </Form>
  );
}
