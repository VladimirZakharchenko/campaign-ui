import React, { forwardRef, useId } from "react";
import styles from "./Radio.module.scss";

export interface RadioProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      error,
      helperText,
      className = "",
      id,
      name,
      value,
      checked,
      ...props
    },
    ref,
  ) => {
    const inputId = id || `radio-${useId()}`;

    return (
      <div className={`${styles.wrapper} ${className}`}>
        <label
          htmlFor={inputId}
          className={`${styles.container} ${error ? styles.hasError : ""}`}
        >
          <input
            ref={ref}
            id={inputId}
            type="radio"
            name={name}
            value={value}
            checked={checked}
            className={styles.input}
            aria-invalid={!!error}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                  ? `${inputId}-helper`
                  : undefined
            }
            {...props}
          />
          <span className={styles.radioMark}></span>
          {label && <span className={styles.label}>{label}</span>}
        </label>
        {error && (
          <span id={`${inputId}-error`} className={styles.errorMessage}>
            {error}
          </span>
        )}
        {helperText && !error && (
          <span id={`${inputId}-helper`} className={styles.helperText}>
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

Radio.displayName = "Radio";
