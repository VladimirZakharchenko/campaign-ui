import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input Component", () => {
  describe("Render and basic states", () => {
    test("renders input with label", () => {
      render(<Input label="Username" />);
      expect(screen.getByLabelText("Username")).toBeInTheDocument();
    });

    test("renders input without label", () => {
      render(<Input placeholder="Enter text" />);
      expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    });

    test("applies custom className", () => {
      const { container } = render(<Input className="custom-class" />);
			const input = container.querySelector("input");
			expect(input).toHaveClass("custom-class");
    });

    test("applies fullWidth class", () => {
      const { container } = render(<Input fullWidth />);
      expect(container.firstChild).toHaveClass("fullWidth");
    });

    test("is disabled when disabled prop is true", () => {
      render(<Input disabled />);
      expect(screen.getByRole("textbox")).toBeDisabled();
    });

    test("forwards ref to input element", () => {
      const ref = { current: null };
      render(<Input ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe("Message display", () => {
    test("displays error message when provided", () => {
      render(<Input error="Required field" />);
      expect(screen.getByText("Required field")).toBeInTheDocument();
      expect(screen.getByText("Required field")).toHaveClass("errorMessage");
    });

    test("displays helper text when no error", () => {
      render(<Input helperText="Enter your username" />);
      expect(screen.getByText("Enter your username")).toBeInTheDocument();
    });

    test("does not display helper text when error exists", () => {
      render(<Input error="Error message" helperText="Helper text" />);
      expect(screen.getByText("Error message")).toBeInTheDocument();
      expect(screen.queryByText("Helper text")).not.toBeInTheDocument();
    });
  });

  describe("Event handling", () => {
    test("handles value changes", () => {
      const handleChange = jest.fn();
      render(<Input value="" onChange={handleChange} />);
      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "test" } });
      expect(handleChange).toHaveBeenCalled();
    });

    test("handles blur events", () => {
      const handleBlur = jest.fn();
      render(<Input onBlur={handleBlur} />);
      const input = screen.getByRole("textbox");
      fireEvent.blur(input);
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe("Password field", () => {
    test("shows password toggle button for password type", () => {
      render(<Input type="password" label="Password" />);
      const toggleButton = screen.getByRole("button", {
        name: /show password/i,
      });
      expect(toggleButton).toBeInTheDocument();
    });

    test("does not show password toggle for non-password type", () => {
      render(<Input type="text" label="Text" />);
      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });

    test("toggles password visibility on click", async () => {
      render(<Input type="password" label="Password" />);
      const input = screen.getByLabelText("Password");
      const toggleButton = screen.getByRole("button", {
        name: /show password/i,
      });

      expect(input).toHaveAttribute("type", "password");

      await userEvent.click(toggleButton);
      expect(input).toHaveAttribute("type", "text");

      await userEvent.click(toggleButton);
      expect(input).toHaveAttribute("type", "password");
    });

    test("toggle button has correct aria-label", () => {
      render(<Input type="password" label="Password" />);
      const toggleButton = screen.getByRole("button");
      expect(toggleButton).toHaveAttribute("aria-label", "Show password");
    });
  });

  describe("Aria attributes", () => {
    test("sets aria-invalid when error exists", () => {
      render(<Input error="Error" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("aria-invalid", "true");
    });

    test("sets aria-invalid to false when no error", () => {
      render(<Input />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("aria-invalid", "false");
    });

    test("sets aria-describedby for error", () => {
      render(<Input error="Error message" />);
      const input = screen.getByRole("textbox");
      const errorId = input.getAttribute("aria-describedby");
      expect(errorId).toBeTruthy();
      expect(screen.getByText("Error message")).toHaveAttribute("id", errorId);
    });

    test("sets aria-describedby for helper text", () => {
      render(<Input helperText="Helper text" />);
      const input = screen.getByRole("textbox");
      const helperId = input.getAttribute("aria-describedby");
      expect(helperId).toBeTruthy();
      expect(screen.getByText("Helper text")).toHaveAttribute("id", helperId);
    });
  });
});
