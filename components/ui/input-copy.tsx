import * as React from "react";

import { cn } from "../../lib/utils";
import { CustomCopy } from "../custom/custom-copy";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputCopy = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <label htmlFor="cpcopy" className="relative">
        <CustomCopy inputText={String(props.value || "")} />
        <input
          id={"cpcopy"}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </label>
    );
  }
);
InputCopy.displayName = "InputCopy";

export { InputCopy };
