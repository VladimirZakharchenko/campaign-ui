import { render, screen, fireEvent } from "@testing-library/react";
import { Radio } from "./Radio";

describe("Radio Component", () => {
  describe("Rendering and basic states", () => {
    test("renders radio with label", () => {
      render(<Radio label="Option 1" />);
      expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
    });

    test("renders radio without label", () => {
      render(<Radio />);
      expect(screen.getByRole("radio")).toBeInTheDocument();
    });

    test("applies custom className", () => {
      const { container } = render(<Radio className="custom-class" />);
      expect(container.firstChild).toHaveClass("custom-class");
    });

    test("can be checked", () => {
      render(<Radio checked onChange={() => {}} />);
      const radio = screen.getByRole("radio");
      expect(radio).toBeChecked();
    });

    test("can be unchecked", () => {
      render(<Radio checked={false} onChange={() => {}} />);
      const radio = screen.getByRole("radio");
      expect(radio).not.toBeChecked();
    });

    test("can be disabled", () => {
      render(<Radio disabled />);
      expect(screen.getByRole("radio")).toBeDisabled();
    });

    test("forwards ref to input element", () => {
      const ref = { current: null };
      render(<Radio ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe("Radio button group", () => {
    test("radio buttons with same name belong to same group", () => {
      render(
        <div>
          <Radio name="group1" label="Option 1" value="1" />
          <Radio name="group1" label="Option 2" value="2" />
        </div>,
      );
      const radios = screen.getAllByRole("radio");
      expect(radios[0]).toHaveAttribute("name", "group1");
      expect(radios[1]).toHaveAttribute("name", "group1");
    });

    test("selecting one radio does not unselect others (React controlled)", () => {
      const { rerender } = render(
        <div>
          <Radio
            name="group"
            label="Option 1"
            checked={true}
            onChange={() => {}}
          />
          <Radio
            name="group"
            label="Option 2"
            checked={false}
            onChange={() => {}}
          />
        </div>,
      );

      expect(screen.getByLabelText("Option 1")).toBeChecked();
      expect(screen.getByLabelText("Option 2")).not.toBeChecked();
    });
  });

  describe("Message display", () => {
    test("displays error message", () => {
      render(<Radio error="Required field" />);
      expect(screen.getByText("Required field")).toBeInTheDocument();
    });

    test("displays helper text", () => {
      render(<Radio helperText="Select an option" />);
      expect(screen.getByText("Select an option")).toBeInTheDocument();
    });

    test("does not display helper text when error exists", () => {
      render(<Radio error="Error" helperText="Helper" />);
      expect(screen.getByText("Error")).toBeInTheDocument();
      expect(screen.queryByText("Helper")).not.toBeInTheDocument();
    });
  });

  describe("Event handling", () => {
    test("handles change events", () => {
      const handleChange = jest.fn();
      render(<Radio onChange={handleChange} />);
      const radio = screen.getByRole("radio");
      fireEvent.click(radio);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test("handles blur events", () => {
      const handleBlur = jest.fn();
      render(<Radio onBlur={handleBlur} />);
      const radio = screen.getByRole("radio");
      fireEvent.blur(radio);
      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe("Aria attributes", () => {
    test("sets aria-invalid when error exists", () => {
      render(<Radio error="Error" />);
      const radio = screen.getByRole("radio");
      expect(radio).toHaveAttribute("aria-invalid", "true");
    });
  });
});
