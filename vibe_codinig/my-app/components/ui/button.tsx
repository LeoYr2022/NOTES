import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/** Material Design 3–style buttons: pill shape, state-layer hover, label sizing */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-[color,background-color,box-shadow,filter] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-md-primary focus-visible:ring-offset-2 focus-visible:ring-offset-md-surface disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-md-primary text-md-on-primary shadow-none hover:brightness-110 active:brightness-95 dark:hover:brightness-115",
        destructive:
          "bg-md-error text-md-on-error shadow-none hover:brightness-110 active:brightness-95",
        outline:
          "border border-md-outline bg-transparent text-md-primary hover:bg-md-primary/10 active:bg-md-primary/[0.16]",
        secondary:
          "bg-md-secondary-container text-md-on-secondary-container shadow-none hover:brightness-95 active:brightness-90 dark:hover:brightness-110",
        ghost:
          "bg-transparent text-md-primary hover:bg-md-primary/10 active:bg-md-primary/[0.16]",
        link: "rounded-none text-md-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-full px-4 text-xs",
        lg: "h-12 rounded-full px-8 text-base",
        icon: "size-10 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
