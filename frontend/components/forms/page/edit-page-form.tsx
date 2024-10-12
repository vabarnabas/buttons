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
import {
  CreatePage,
  createPageSchema,
  Page,
  UpdatePage,
  updatePageSchema,
} from "@/types/page.types";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createPage, updatePage } from "@/lib/actions/page";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EditPageForm({ page }: { page: Page }) {
  const form = useForm<UpdatePage>({
    resolver: zodResolver(updatePageSchema),
    defaultValues: { name: page.name, description: page.description },
  });

  const onSubmit = form.handleSubmit((data) => {
    toast.promise(updatePage(page.id, data), {
      loading: "Updating Page...",
      success: "Page Updated Successfully",
      error: "Failed to Update Page",
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="flex gap-x-2 items-center">
          <Link href={`/dashboard/pages/${page.id}`}>
            <ArrowLeft />
          </Link>
          <p className="text-2xl font-semibold">Update Page</p>
        </div>
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
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description (optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe Your Page" {...field} />
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
