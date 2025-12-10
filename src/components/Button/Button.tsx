import type { ButtonProps } from "./buttonType";
import { Loader2 } from "lucide-react";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className,
  children,
  ...rest
}: ButtonProps) {
  const variantClasses =
    {
      primary: "bg-emerald-600 text-white hover:bg-emerald-700",
      secondary: "bg-slate-200 text-emerald-900 hover:bg-slate-300",
      outline: "border border-emerald-400 text-slate-900 hover:bg-emerald-50",
    }[variant] || "";

  const sizeClasses =
    {
      sm: "px-2 py-2 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-3 text-lg",
    }[size] || "";

  return (
    <button
      className={cn(
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
