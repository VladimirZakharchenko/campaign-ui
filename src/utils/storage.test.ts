import { storage, sessionStorage } from "./storage";

describe("storage", () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    localStorage.clear();
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  describe("get", () => {
    test("returns default value when key does not exist", () => {
      expect(storage.get("nonexistent", "default")).toBe("default");
    });

    test("returns parsed value when key exists", () => {
      localStorage.setItem("test", JSON.stringify({ name: "John" }));
      expect(storage.get("test")).toEqual({ name: "John" });
    });

    test("handles JSON parse errors gracefully", () => {
      localStorage.setItem("invalid", "not-json");
      expect(storage.get("invalid", "default")).toBe("default");
      expect(consoleErrorSpy).toHaveBeenCalled();
    });
  });

  describe("set", () => {
    test("saves value to localStorage", () => {
      storage.set("test", { name: "John" });
      expect(localStorage.getItem("test")).toBe(
        JSON.stringify({ name: "John" }),
      );
    });
  });

  describe("remove", () => {
    test("removes key from localStorage", () => {
      localStorage.setItem("test", "value");
      storage.remove("test");
      expect(localStorage.getItem("test")).toBeNull();
    });
  });

  describe("clear", () => {
    test("clears all localStorage", () => {
      localStorage.setItem("test1", "value1");
      localStorage.setItem("test2", "value2");
      storage.clear();
      expect(localStorage.length).toBe(0);
    });
  });

  describe("has", () => {
    test("returns true when key exists", () => {
      localStorage.setItem("test", "value");
      expect(storage.has("test")).toBe(true);
    });

    test("returns false when key does not exist", () => {
      expect(storage.has("nonexistent")).toBe(false);
    });
  });
});

describe("sessionStorage", () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    window.sessionStorage.clear();
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  test("get returns default for nonexistent key", () => {
    expect(sessionStorage.get("test", "default")).toBe("default");
  });

  test("set saves value", () => {
    sessionStorage.set("test", "value");
    expect(window.sessionStorage.getItem("test")).toBe(JSON.stringify("value"));
  });
});
