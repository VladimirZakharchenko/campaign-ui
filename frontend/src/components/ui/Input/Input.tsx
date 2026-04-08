import React, { useState, forwardRef, useId } from "react";
import styles from "./Input.module.scss";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label text displayed above the input */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text displayed below the input (when no error) */
  helperText?: string;
  /** Makes input take full wiFdth */
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      className = "",
      id,
      type,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputId = id || `input-${useId()}`;
    const isPassword = type === "password";

    const inputClasses = [
      styles.input,
      error && styles.error,
      fullWidth && styles.fullWidth,
      className,
    ]
		.filter(Boolean)
		.join(' ');

    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ""}`}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}

        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            type={inputType}
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

          {isPassword && (
            <button
              type="button"
              className={styles.passwordToggle}
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          )}
        </div>

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

Input.displayName = 'Input';
