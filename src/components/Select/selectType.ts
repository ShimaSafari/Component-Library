export interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "value" | "defaultValue" | "onChange"
  > {
  label?: string;
  description?: string;
  error?: string;
  options: Option[];
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
}
