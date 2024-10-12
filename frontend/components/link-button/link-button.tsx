import React from "react";
import TooltipWrapper from "../tooltip-wrapper/tooltip-wrapper";
import { LinkType } from "@/types/link.types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

export default function LinkButton({ link }: { link: LinkType }) {
  return (
    <TooltipWrapper tooltip={link.description}>
      <Link
        target="_blank"
        href={
          link.url.startsWith("http://") || link.url.startsWith("https://")
            ? link.url
            : `http://${link.url}`
        }
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "sm",
          }),
          "text-lg flex items-center gap-x-2 w-max"
        )}
      >
        <Image
          src={`https://icon.horse/icon/${
            link.url.startsWith("http://") || link.url.startsWith("https://")
              ? link.url
                  .replace("http://", "")
                  .replace("https://", "")
                  .split("/")[0]
              : link.url.split("/")[0]
          }`}
          alt={link.name}
          width={16}
          height={16}
        />
        <p className="text-sm">{link.name}</p>
      </Link>
    </TooltipWrapper>
  );
}
