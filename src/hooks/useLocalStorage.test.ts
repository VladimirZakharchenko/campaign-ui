import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("returns initial value when no value in storage", () => {
    const { result } = renderHook(() => useLocalStorage("test-key", "initial"));
    expect(result.current[0]).toBe("initial");
  });

  test("reads existing value from localStorage", () => {
    localStorage.setItem("test-key", JSON.stringify("stored"));
    const { result } = renderHook(() => useLocalStorage("test-key", "initial"));
    expect(result.current[0]).toBe("stored");
  });

  test("updates localStorage when value changes", () => {
    const { result } = renderHook(() => useLocalStorage("test-key", "initial"));

    act(() => {
      result.current[1]("updated");
    });

    expect(result.current[0]).toBe("updated");
    expect(localStorage.getItem("test-key")).toBe(JSON.stringify("updated"));
  });

  test("works with objects", () => {
    const initial = { name: "John", age: 30 };
    const { result } = renderHook(() => useLocalStorage("user", initial));

    act(() => {
      result.current[1]({ name: "Jane", age: 25 });
    });

    expect(result.current[0]).toEqual({ name: "Jane", age: 25 });
  });
});
