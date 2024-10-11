import { Page } from "@/types/page.types";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Dashboard() {
  const pageResponse = await fetch(`${process.env.API_URL}/pages`, {
    cache: "no-store",
  });

  if (!pageResponse.ok) {
    throw new Error("Failed to fetch pages");
  }

  const pages: Page[] = await pageResponse.json();

  return (
    <div>
      <p className="text-2xl font-semibold mt-2">My Boards</p>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {pages.map((page) => (
          <Link
            key={page.id}
            className="bg-secondary h-28 rounded-lg group flex p-4"
            href={`/dashboard/pages/${page.id}`}
          >
            <p className="text-foreground font-semibold text-lg">{page.name}</p>
          </Link>
        ))}
        <Link
          className="bg-secondary h-28 rounded-lg group flex items-center justify-center"
          href="/dashboard/pages/editor"
        >
          <Plus className="size-9 text-muted-foreground group-hover:scale-110 group-hover:text-foreground transition-all duration-300 ease-in-out" />
        </Link>
      </div>
    </div>
  );
}
