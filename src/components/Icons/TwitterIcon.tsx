import { cn } from "@/utils/cn";
import React from "react";

const TwitterIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 72 72"
      viewBox="0 0 72 72"
      className={cn("w-5 h-5 fill-none stroke-2", className)}
      id="twitterx"
    >
      <switch>
        <g fill="#57525f">
          <path
            d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
			h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"
            fill="#57525f"
          ></path>
        </g>
      </switch>
    </svg>
  );
};

export default TwitterIcon;
