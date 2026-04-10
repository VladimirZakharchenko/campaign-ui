/**
 * Format date to localized string
 */
export const formatDate = (
  date: Date | string | number,
  locale: string = "ru-RU",
  options?: Intl.DateTimeFormatOptions,
): string => {
  const d = new Date(date);
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return d.toLocaleDateString(locale, options || defaultOptions);
};

/**
 * Format number with thousand separators
 */
export const formatNumber = (num: number, decimals: number = 0): string => {
  return num.toLocaleString("ru-RU", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

/**
 * Format price with currency
 */
export const formatPrice = (price: number, currency: string = "₽"): string => {
  return `${formatNumber(price)} ${currency}`;
};

/**
 * Format phone number with mask
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]}-${match[4]}-${match[5]}`;
  }
  return phone;
};

/**
 * Convert milliseconds to time object { days, hours, minutes, seconds }
 */
export const msToTime = (
  ms: number,
): { days: number; hours: number; minutes: number; seconds: number } => {
  const seconds = Math.floor(ms / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return { days, hours, minutes, seconds: secs };
};

/**
 * Add leading zero to number (for timers)
 */
export const padZero = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};

/**
 * Truncate string to specified length
 */
export const truncate = (
  str: string,
  length: number,
  suffix: string = "...",
): string => {
  if (str.length <= length) return str;
  return str.slice(0, length) + suffix;
};
