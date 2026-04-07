import React, { forwardRef, useCallback, useEffect, useId, useRef } from "react";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  /** Label text for the checkbox */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Indeterminate state */
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error,
      helperText,
      indeterminate = false,
      className = "",
      id,
      checked,
      ...props
    },
    ref,
  ) => {
    const inputId = id || `checkbox-${useId()}`;
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const setRefs = useCallback((element: HTMLInputElement | null) => {
        if (ref) {
          if (typeof ref === "function") {
            ref(element);
          } else {
            ref.current = element;
          }
        }

        inputRef.current = element;
      }, [ref]);

    return (
      <div className={`${styles.wrapper} ${className}`}>
        <label
          htmlFor={inputId}
          className={`${styles.container} ${error ? styles.hasError : ""}`}
        >
          <input
            ref={setRefs}
            id={inputId}
            type="checkbox"
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
          <span className={styles.checkmark}></span>
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

Checkbox.displayName = "Checkbox";
