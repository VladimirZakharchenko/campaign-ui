import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox Component", () => {
  describe("Rendering and basic states", () => {
    test("renders checkbox with label", () => {
      render(<Checkbox label="Accept terms" />);
      expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
    });

    test("renders checkbox without label", () => {
      render(<Checkbox />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    test("applies custom className", () => {
      const { container } = render(<Checkbox className="custom-class" />);
      expect(container.firstChild).toHaveClass("custom-class");
    });

    test("can be checked", () => {
      render(<Checkbox checked onChange={() => {}} />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toBeChecked();
    });

    test("can be unchecked", () => {
      render(<Checkbox checked={false} onChange={() => {}} />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).not.toBeChecked();
    });

    test("can be disabled", () => {
      render(<Checkbox disabled />);
      expect(screen.getByRole("checkbox")).toBeDisabled();
    });

    test("forwards ref to input element", () => {
      const ref = { current: null };
      render(<Checkbox ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe("Indeterminate state", () => {
    test("applies indeterminate state via ref", () => {
      const { container } = render(<Checkbox indeterminate />);
      const input = container.querySelector("input");
      expect(input?.indeterminate).toBe(true);
    });

    test("indeterminate does not affect checked state", () => {
      const { container } = render(<Checkbox indeterminate checked={false} onChange={() => {}} />);
      const input = container.querySelector("input");
      expect(input?.indeterminate).toBe(true);
      expect(input?.checked).toBe(false);
    });
  });

  describe("Message display", () => {
    test("displays error message", () => {
      render(<Checkbox error="Required field" />);
      expect(screen.getByText("Required field")).toBeInTheDocument();
    });

    test("displays helper text", () => {
      render(<Checkbox helperText="This is a helper text" />);
      expect(screen.getByText("This is a helper text")).toBeInTheDocument();
    });

    test("does not display helper text when error exists", () => {
      render(<Checkbox error="Error" helperText="Helper" />);
      expect(screen.getByText("Error")).toBeInTheDocument();
      expect(screen.queryByText("Helper")).not.toBeInTheDocument();
    });
  });

  describe("Event handling", () => {
    test("handles change events", () => {
      const handleChange = jest.fn();
      render(<Checkbox onChange={handleChange} />);
      const checkbox = screen.getByRole("checkbox");
      fireEvent.click(checkbox);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test("handles blur events", () => {
      const handleBlur = jest.fn();
      render(<Checkbox onBlur={handleBlur} />);
      const checkbox = screen.getByRole("checkbox");
      fireEvent.blur(checkbox);
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe("Aria attributes", () => {
    test("sets aria-invalid when error exists", () => {
      render(<Checkbox error="Error" />);
      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveAttribute("aria-invalid", "true");
    });

    test("sets aria-describedby for error", () => {
      render(<Checkbox error="Error message" />);
      const checkbox = screen.getByRole("checkbox");
      const errorId = checkbox.getAttribute("aria-describedby");
      expect(errorId).toBeTruthy();
      expect(screen.getByText("Error message")).toHaveAttribute("id", errorId);
    });
  });
});
