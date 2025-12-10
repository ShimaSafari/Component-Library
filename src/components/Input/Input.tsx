import { forwardRef, useId } from "react";
import type { InputProps } from "./inputType";
import clsx from "clsx";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, description, error, disabled, className, id, ...rest },
  ref
) {
  const autoId = useId();
  //   console.log(autoId);

  const inputId = id || `input_${autoId}`;
  //   console.log(inputId);

  return (
    <div className="flex flex-col gap-1 w-full">
      {/* --- Label --- */}
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-800">
          {label}
        </label>
      )}

      {/* --- Input---  */}
      <input
        id={inputId}
        ref={ref}
        disabled={disabled}
        className={clsx(
          "w-full px-3 py-2 rounded-md border outline-none transition-all",
          error
            ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-600 text-red-600"
            : "border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500",
          disabled && "bg-gray-100 opacity-60 cursor-not-allowed",
          className
        )}
        {...rest}
      />

      {/* ---- Description ---- */}
      {description && !error && (
        <p className="text-xs text-gray-500">{description}</p>
      )}

      {/* ---- Error ---- */}
      {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
    </div>
  );
});

export default Input;
