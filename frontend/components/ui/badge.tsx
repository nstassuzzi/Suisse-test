import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
