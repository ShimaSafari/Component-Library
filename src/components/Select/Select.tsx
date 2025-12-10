import { forwardRef, useId } from "react";
import clsx from "clsx";
import type { SelectProps } from "./selectType";

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    label,
    description,
    error,
    options,
    placeholder,
    disabled,
    className,
    id,
    value,
    onChange,
    ...rest
  },
  ref
) {
  const autoId = useId();
  const selectId = id || `select-${autoId}`;

  const baseClasses =
    "w-full px-3 py-2 rounded-md border outline-none transition-all";

  const normalBorder =
    "border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500";
  const errorBorder =
    "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-600";
  const disabledClasses = "bg-gray-100 opacity-60 cursor-not-allowed";

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-gray-800">
          {label}
        </label>
      )}

      <select
        id={selectId}
        ref={ref}
        disabled={disabled}
        className={clsx(
          baseClasses,
          error ? errorBorder : normalBorder,
          disabled && disabledClasses,
          className
        )}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>

      {description && !error && (
        <p className="text-xs text-gray-500">{description}</p>
      )}

      {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
    </div>
  );
});

export default Select;
