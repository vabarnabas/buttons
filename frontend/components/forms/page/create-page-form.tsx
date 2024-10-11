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
import { CreatePage, createPageSchema } from "@/types/page.types";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createPage } from "@/lib/actions/page";

export default function CreatePageForm() {
  const form = useForm<CreatePage>({
    resolver: zodResolver(createPageSchema),
  });

  const onSubmit = form.handleSubmit((data) => {
    toast.promise(createPage(data), {
      loading: "Creating Page...",
      success: "Page Created Successfully",
      error: "Failed to Create Page",
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4">
        <p className="text-2xl font-semibold">Create Page</p>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Page Name</FormLabel>
              <FormControl>
                <Input placeholder="Name of Your Page" {...field} />
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
