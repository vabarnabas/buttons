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
import {
  CreateGroup,
  createGroupSchema,
  Group,
  UpdateGroup,
  updateGroupSchema,
} from "@/types/group.types";
import { createGroup, updateGroup } from "@/lib/actions/group";

export default function EditGroupForm({ group }: { group: Group }) {
  const form = useForm<UpdateGroup>({
    resolver: zodResolver(updateGroupSchema),
    defaultValues: { ...group },
  });

  const onSubmit = form.handleSubmit((data) => {
    toast.promise(
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
        <Button className="w-full">Create</Button>
      </form>
    </Form>
  );
}
