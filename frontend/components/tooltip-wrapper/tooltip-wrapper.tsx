import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function TooltipWrapper({
  children,
  tooltip,
}: {
  children: React.ReactNode;
  tooltip?: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        {tooltip ? (
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        ) : null}
      </Tooltip>
    </TooltipProvider>
  );
}
