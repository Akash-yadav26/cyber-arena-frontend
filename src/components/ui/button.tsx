import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 neon-glow",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Gaming Variants
        gaming: "bg-gradient-to-r from-neon-green to-neon-blue text-black font-cyberpunk font-semibold hover:scale-105 neon-glow transition-all duration-300",
        hero: "glass-button text-white font-gaming font-bold border-neon-green/50 hover:border-neon-green hover:bg-neon-green/10 hover:shadow-[0_0_30px_hsl(var(--neon-green)/0.6)]",
        tournament: "bg-neon-purple/20 text-neon-purple border border-neon-purple/50 font-cyberpunk hover:bg-neon-purple/30 neon-glow-purple",
        leaderboard: "bg-neon-blue/20 text-neon-blue border border-neon-blue/50 font-cyberpunk hover:bg-neon-blue/30 neon-glow-blue",
        danger: "bg-neon-red/20 text-neon-red border border-neon-red/50 font-cyberpunk hover:bg-neon-red/30",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
