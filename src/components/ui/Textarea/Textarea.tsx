import React, { forwardRef, useId } from "react";
import styles from "./Textarea.module.scss";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Number of rows */
  rows?: number;
  /** Full width */
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      rows = 3,
      fullWidth = false,
      className = "",
      id,
      ...props
    },
    ref,
  ) => {
    const textareaId =
      id || `textarea-${useId()}`;

    return (
      <div
        className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ""} ${className}`}
      >
        {label && (
          <label htmlFor={textareaId} className={styles.label}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={`${styles.textarea} ${error ? styles.error : ""}`}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helperText
                ? `${textareaId}-helper`
                : undefined
          }
          {...props}
        />
        {error && (
          <span id={`${textareaId}-error`} className={styles.errorMessage}>
            {error}
          </span>
        )}
        {helperText && !error && (
          <span id={`${textareaId}-helper`} className={styles.helperText}>
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
