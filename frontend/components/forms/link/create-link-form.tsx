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
import { CreateLink, createLinkSchema } from "@/types/link.types";
import { createLink } from "@/lib/actions/link";

export default function CreateLinkForm({
  groupId,
  pageId,
  setIsOpen,
}: {
  groupId: string;
  pageId: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const form = useForm<CreateLink>({
    resolver: zodResolver(createLinkSchema),
    defaultValues: { groupId },
  });

  const onSubmit = form.handleSubmit((data) => {
    const status = toast.promise(createLink(data, pageId), {
      loading: "Creating Link...",
      success: "Link Created Successfully",
      error: "Failed to Create Link",
    });

    if (status.toString() === "1") {
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
              <FormLabel>Link Name</FormLabel>
              <FormControl>
                <Input placeholder="Name of your link" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="e.g. google.com" {...field} />
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
              <FormLabel>Tooltip (optional)</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Good search engine" {...field} />
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
