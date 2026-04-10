import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "./Select";

const mockOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

describe("Select Component", () => {
  describe("Rendering and basic states", () => {
    test("renders select with label", () => {
      render(<Select label="Choose option" options={mockOptions} />);
      expect(screen.getByText("Choose option")).toBeInTheDocument();
    });

    test("renders select without label", () => {
      render(<Select options={mockOptions} />);
      expect(screen.getByRole("combobox")).toBeInTheDocument();
    });

    test("renders placeholder when provided", () => {
      render(<Select options={mockOptions} placeholder="-- Select --" />);
      expect(screen.getByText("-- Select --")).toBeInTheDocument();
    });

    test("renders all options", () => {
      render(<Select options={mockOptions} />);
      expect(screen.getByText("Option 1")).toBeInTheDocument();
      expect(screen.getByText("Option 2")).toBeInTheDocument();
      expect(screen.getByText("Option 3")).toBeInTheDocument();
    });

    test("applies custom className", () => {
      const { container } = render(
        <Select options={mockOptions} className="custom-class" />,
      );
      expect(container.firstChild).toHaveClass("custom-class");
    });

    test("applies fullWidth class", () => {
      const { container } = render(<Select options={mockOptions} fullWidth />);
      expect(container.firstChild).toHaveClass("fullWidth");
    });

    test("can be disabled", () => {
      render(<Select options={mockOptions} disabled />);
      expect(screen.getByRole("combobox")).toBeDisabled();
    });

    test("forwards ref to select element", () => {
      const ref = { current: null };
      render(<Select ref={ref} options={mockOptions} />);
      expect(ref.current).toBeInstanceOf(HTMLSelectElement);
    });
  });

  describe("Value selection", () => {
    test("displays selected value", () => {
      render(
        <Select options={mockOptions} value="option2" onChange={() => {}} />,
      );
      expect(screen.getByRole("combobox")).toHaveValue("option2");
    });

    test("handles value change", () => {
      const handleChange = jest.fn();
      render(<Select options={mockOptions} onChange={handleChange} />);
      const select = screen.getByRole("combobox");
      fireEvent.change(select, { target: { value: "option2" } });
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe("Message display", () => {
    test("displays error message", () => {
      render(<Select options={mockOptions} error="Required field" />);
      expect(screen.getByText("Required field")).toBeInTheDocument();
    });

    test("displays helper text", () => {
      render(<Select options={mockOptions} helperText="Choose wisely" />);
      expect(screen.getByText("Choose wisely")).toBeInTheDocument();
    });

    test("does not display helper text when error exists", () => {
      render(
        <Select options={mockOptions} error="Error" helperText="Helper" />,
      );
      expect(screen.getByText("Error")).toBeInTheDocument();
      expect(screen.queryByText("Helper")).not.toBeInTheDocument();
    });
  });

  describe("Aria attributes", () => {
    test("sets aria-invalid when error exists", () => {
      render(<Select options={mockOptions} error="Error" />);
      const select = screen.getByRole("combobox");
      expect(select).toHaveAttribute("aria-invalid", "true");
    });

    test("sets aria-describedby for error", () => {
      render(<Select options={mockOptions} error="Error message" />);
      const select = screen.getByRole("combobox");
      const errorId = select.getAttribute("aria-describedby");
      expect(errorId).toBeTruthy();
      expect(screen.getByText("Error message")).toHaveAttribute("id", errorId);
    });
  });
});
