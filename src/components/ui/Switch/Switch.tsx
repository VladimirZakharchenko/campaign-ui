import React, { forwardRef, useId } from "react";
import styles from "./Switch.module.scss";

export interface SwitchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  /** Label text */
  label?: string;
  /** Description text */
  description?: string;
  /** Size of the switch */
  size?: "small" | "medium" | "large";
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      description,
      size = "medium",
      className = "",
      id,
      checked,
      ...props
    },
    ref,
  ) => {
    const inputId = id || `switch-${useId()}`;

    return (
      <div className={`${styles.wrapper} ${className}`}>
        <div className={styles.container}>
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            checked={checked}
            className={styles.input}
            {...props}
          />
          <label
            htmlFor={inputId}
            className={`${styles.switch} ${styles[size]}`}
          >
            <span className={styles.slider}></span>
          </label>
          {(label || description) && (
            <div className={styles.textGroup}>
              {label && <span className={styles.label}>{label}</span>}
              {description && (
                <span className={styles.description}>{description}</span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  },
);

Switch.displayName = "Switch";
