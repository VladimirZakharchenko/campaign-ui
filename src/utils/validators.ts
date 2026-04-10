/**
 * Email address validation
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Phone number validation (international format)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[0-9\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

/**
 * Name validation (minimum 2 characters, only letters and spaces)
 */
export const isValidName = (name: string): boolean => {
  return name.trim().length >= 2 && /^[a-zA-Zа-яА-Я\s]+$/.test(name);
};

/**
 * URL validation
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Check for non-empty string
 */
export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0;
};

/**
 * Minimum string length validation
 */
export const hasMinLength = (value: string, min: number): boolean => {
  return value.trim().length >= min;
};

/**
 * Maximum string length validation
 */
export const hasMaxLength = (value: string, max: number): boolean => {
  return value.trim().length <= max;
};
