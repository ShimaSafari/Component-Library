import clsx from "clsx";
import type { ButtonProps } from "./buttonType";
import { Loader2 } from "lucide-react";

export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className,
  children,
  ...rest
}: ButtonProps) {
  const variantClasses = clsx({
    "bg-emerald-600 text-white hover:bg-emerald-700": variant === "primary",
    "bg-slate-200 text-emerald-900 hover:bg-slate-300": variant === "secondary",
    "border border-emerald-400 text-slate-900 hover:bg-emerald-50":
      variant === "outline",
  });

  const sizeClasses = clsx({
    "px-2 py-2 text-sm": size === "sm",
    "px-3 py-2 text-base": size === "md",
    "px-4 py-3 text-lg": size === "lg",
  });

  return (
    <button
      className={clsx(
        "rounded-lg font-medium flex items-center justify-center gap-2 transition-all",
        variantClasses,
        sizeClasses,
        (loading || disabled) && "opacity-60 cursor-not-allowed",
        className
      )}
      disabled={loading || disabled}
      {...rest}
    >
      {loading && <Loader2 className="animate-spin w-4 h-4" />}
      {children}
    </button>
  );
}
