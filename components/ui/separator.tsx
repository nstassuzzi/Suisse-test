import * as React from "react"
import { cn } from "@/lib/utils"

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("shrink-0 bg-border", className)}
    {...props}
  />
))
Separator.displayName = "Separator"

export { Separator }
