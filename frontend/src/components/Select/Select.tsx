import React, { forwardRef, useId } from "react";
import styles from "./Select.module.scss";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Label text */
  label?: string;
  /** Options for the select */
  options: SelectOption[];
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Full width */
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      error,
      helperText,
      placeholder,
      fullWidth = false,
      className = "",
      id,
      ...props
    },
    ref,
  ) => {
    const selectId = id || `select-${useId()}`;

    return (
      <div
        className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ""} ${className}`}
      >
        {label && (
          <label htmlFor={selectId} className={styles.label}>
            {label}
          </label>
        )}
        <div className={styles.selectWrapper}>
          <select
            ref={ref}
            id={selectId}
            className={`${styles.select} ${error ? styles.error : ""}`}
            aria-invalid={!!error}
            aria-describedby={
              error
                ? `${selectId}-error`
                : helperText
                  ? `${selectId}-helper`
                  : undefined
            }
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className={styles.arrow}>▼</span>
        </div>
        {error && (
          <span id={`${selectId}-error`} className={styles.errorMessage}>
            {error}
          </span>
        )}
        {helperText && !error && (
          <span id={`${selectId}-helper`} className={styles.helperText}>
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
