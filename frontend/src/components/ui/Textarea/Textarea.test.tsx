import { render, screen, fireEvent } from "@testing-library/react";
import { Textarea } from "./Textarea";

describe("Textarea Component", () => {
  describe("Rendering and basic states", () => {
    test("renders textarea with label", () => {
      render(<Textarea label="Comment" />);
      expect(screen.getByLabelText("Comment")).toBeInTheDocument();
    });

    test("renders textarea without label", () => {
      render(<Textarea placeholder="Enter text" />);
      expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    });

    test("applies custom className", () => {
      const { container } = render(<Textarea className="custom-class" />);
      expect(container.firstChild).toHaveClass("custom-class");
    });

    test("applies fullWidth class", () => {
      const { container } = render(<Textarea fullWidth />);
      expect(container.firstChild).toHaveClass("fullWidth");
    });

    test("sets rows attribute", () => {
      render(<Textarea rows={5} />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("rows", "5");
    });

    test("uses default rows when not specified", () => {
      render(<Textarea />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("rows", "3");
    });

    test("can be disabled", () => {
      render(<Textarea disabled />);
      expect(screen.getByRole("textbox")).toBeDisabled();
    });

    test("forwards ref to textarea element", () => {
      const ref = { current: null };
      render(<Textarea ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
    });
  });

  describe("Value and events", () => {
    test("displays value", () => {
      render(<Textarea value="Hello world" onChange={() => {}} />);
      expect(screen.getByRole("textbox")).toHaveValue("Hello world");
    });

    test("handles value changes", () => {
      const handleChange = jest.fn();
      render(<Textarea value="" onChange={handleChange} />);
      const textarea = screen.getByRole("textbox");
      fireEvent.change(textarea, { target: { value: "new text" } });
      expect(handleChange).toHaveBeenCalled();
    });

    test("handles blur events", () => {
      const handleBlur = jest.fn();
      render(<Textarea onBlur={handleBlur} />);
      const textarea = screen.getByRole("textbox");
      fireEvent.blur(textarea);
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe("Message display", () => {
    test("displays error message", () => {
      render(<Textarea error="Required field" />);
      expect(screen.getByText("Required field")).toBeInTheDocument();
    });

    test("displays helper text", () => {
      render(<Textarea helperText="Enter your comment" />);
      expect(screen.getByText("Enter your comment")).toBeInTheDocument();
    });

    test("does not display helper text when error exists", () => {
      render(<Textarea error="Error" helperText="Helper" />);
      expect(screen.getByText("Error")).toBeInTheDocument();
      expect(screen.queryByText("Helper")).not.toBeInTheDocument();
    });
  });

  describe("Aria attributes", () => {
    test("sets aria-invalid when error exists", () => {
      render(<Textarea error="Error" />);
      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("aria-invalid", "true");
    });

    test("sets aria-describedby for error", () => {
      render(<Textarea error="Error message" />);
      const textarea = screen.getByRole("textbox");
      const errorId = textarea.getAttribute("aria-describedby");
      expect(errorId).toBeTruthy();
      expect(screen.getByText("Error message")).toHaveAttribute("id", errorId);
    });

    test("sets aria-describedby for helper text", () => {
      render(<Textarea helperText="Helper text" />);
      const textarea = screen.getByRole("textbox");
      const helperId = textarea.getAttribute("aria-describedby");
      expect(helperId).toBeTruthy();
      expect(screen.getByText("Helper text")).toHaveAttribute("id", helperId);
    });
  });
});
