import {
  formatDate,
  formatNumber,
  formatPrice,
  formatPhone,
  msToTime,
  padZero,
  truncate,
} from "./formatters";

describe("formatters", () => {
  describe("formatDate", () => {
    test("formats date with default options", () => {
      const date = new Date(2024, 3, 15);
      expect(formatDate(date)).toMatch(/15/);
    });
  });

  describe("formatNumber", () => {
    test("formats number with thousand separators", () => {
      expect(formatNumber(1234567)).toBe("1\u00A0234\u00A0567");
    });

    test("handles decimals", () => {
      expect(formatNumber(1234.56, 2)).toBe("1\u00A0234,56");
    });
  });

  describe("formatPrice", () => {
    test("formats price with default currency", () => {
      expect(formatPrice(12500)).toBe("12\u00A0500 ₽");
    });

    test("formats price with custom currency", () => {
      expect(formatPrice(100, "$")).toBe("100 $");
    });
  });

  describe("formatPhone", () => {
    test("formats 11-digit phone number", () => {
      expect(formatPhone("79111234567")).toBe("+7 911 123-45-67");
    });

    test("returns original string for invalid format", () => {
      expect(formatPhone("123")).toBe("123");
    });
  });

  describe("msToTime", () => {
    test("converts milliseconds to time object", () => {
      const result = msToTime(90061000); // 1 day, 1 hour, 1 minute, 1 second
      expect(result).toEqual({
        days: 1,
        hours: 1,
        minutes: 1,
        seconds: 1,
      });
    });
  });

  describe("padZero", () => {
    test("adds leading zero for numbers less than 10", () => {
      expect(padZero(5)).toBe("05");
    });

    test("does not add leading zero for numbers 10 or greater", () => {
      expect(padZero(12)).toBe("12");
    });
  });

  describe("truncate", () => {
    test("truncates string longer than length", () => {
      expect(truncate("Hello world", 5)).toBe("Hello...");
    });

    test("returns original string if shorter than length", () => {
      expect(truncate("Hi", 5)).toBe("Hi");
    });
  });
});
