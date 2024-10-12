import React from "react";
import PersonalLogo from "./personal-logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export default function Footer() {
  const className =
    "cursor-pointer hover:text-wolt-blue ease-out transition-all duration-200";

  return (
    <div className="h-14 w-full flex justify-center border-background-secondary">
      <div className="flex items-center justify-between w-full max-w-[1600px] px-6 md:px-8">
        <p className="text-sm flex items-center">
          <PersonalLogo
            width={18}
            height={18}
            className="text-primary mr-1.5"
          />
          Created by
          <span className="ml-1 font-medium">Barnabas Varga</span>
        </p>
        <div className="flex items-center gap-x-3 text-sm">
          <Link
            target="_blank"
            href={"https://github.com/vabarnabas"}
            className={cn(
              buttonVariants({ variant: "link", size: "sm" }),
              "p-0"
            )}
          >
            Github
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/vabarnabas/"
            className={cn(
              buttonVariants({ variant: "link", size: "sm" }),
              "p-0"
            )}
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}
