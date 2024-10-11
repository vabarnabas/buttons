import React from "react";
import { ThemeSelector } from "../theme-selector/theme-selector";
import { PanelsTopLeft } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 h-16 flex justify-center items-center bg-background/70 backdrop-blur-lg border-b"
      )}
    >
      <div className="w-full max-w-[1280px] px-6 flex items-center justify-between">
        <p className="flex items-center gap-x-2 text-xl font-medium">
          <PanelsTopLeft className="size-6" /> Buttons
        </p>
        <div className="flex gap-x-4 items-center">
          <ThemeSelector />
          <SignedIn>
            <Link
              href="/dashboard"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Dashboard
            </Link>
          </SignedIn>
          <SignedOut>
            <SignUpButton>
              <Button>Sign Up</Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
