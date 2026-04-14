import {
  isValidEmail,
  isValidPhone,
  isValidName,
  isValidUrl,
  isNotEmpty,
  hasMinLength,
  hasMaxLength,
} from "./validators";

describe("validators", () => {
  describe("isValidEmail", () => {
    test("returns true for valid email", () => {
      expect(isValidEmail("test@example.com")).toBe(true);
      expect(isValidEmail("user.name@domain.co.uk")).toBe(true);
    });

    test("returns false for invalid email", () => {
      expect(isValidEmail("invalid")).toBe(false);
      expect(isValidEmail("test@")).toBe(false);
      expect(isValidEmail("@example.com")).toBe(false);
      expect(isValidEmail("test@example")).toBe(false);
      expect(isValidEmail("")).toBe(false);
    });
  });

  describe("isValidPhone", () => {
    test("returns true for valid phone", () => {
      expect(isValidPhone("+79111234567")).toBe(true);
      expect(isValidPhone("79111234567")).toBe(true);
      expect(isValidPhone("+7 911 123-45-67")).toBe(true);
    });

    test("returns false for invalid phone", () => {
      expect(isValidPhone("123")).toBe(false);
      expect(isValidPhone("")).toBe(false);
    });
  });

  describe("isValidName", () => {
    test("returns true for valid name", () => {
      expect(isValidName("John")).toBe(true);
      expect(isValidName("John Doe")).toBe(true);
      expect(isValidName("Иван")).toBe(true);
      expect(isValidName("Иван Петров")).toBe(true);
    });

    test("returns false for invalid name", () => {
      expect(isValidName("J")).toBe(false);
      expect(isValidName("John123")).toBe(false);
      expect(isValidName("")).toBe(false);
    });
  });

  describe("isValidUrl", () => {
    test("returns true for valid URL", () => {
      expect(isValidUrl("https://example.com")).toBe(true);
      expect(isValidUrl("http://localhost:3000")).toBe(true);
    });

    test("returns false for invalid URL", () => {
      expect(isValidUrl("not-a-url")).toBe(false);
      expect(isValidUrl("")).toBe(false);
    });
  });

  describe("isNotEmpty", () => {
    test("returns true for non-empty string", () => {
      expect(isNotEmpty("hello")).toBe(true);
      expect(isNotEmpty("  a  ")).toBe(true);
    });

    test("returns false for empty string", () => {
      expect(isNotEmpty("")).toBe(false);
      expect(isNotEmpty("   ")).toBe(false);
    });
  });

  describe("hasMinLength", () => {
    test("returns true when length meets minimum", () => {
      expect(hasMinLength("hello", 3)).toBe(true);
      expect(hasMinLength("hi", 2)).toBe(true);
    });

    test("returns false when length is less than minimum", () => {
      expect(hasMinLength("hi", 3)).toBe(false);
    });
  });

  describe("hasMaxLength", () => {
    test("returns true when length does not exceed maximum", () => {
      expect(hasMaxLength("hi", 5)).toBe(true);
      expect(hasMaxLength("hello", 5)).toBe(true);
    });

    test("returns false when length exceeds maximum", () => {
      expect(hasMaxLength("hello", 3)).toBe(false);
    });
  });
});
