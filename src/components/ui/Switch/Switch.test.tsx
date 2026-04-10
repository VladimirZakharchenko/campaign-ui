import { render, screen, fireEvent } from "@testing-library/react";
import { Switch } from "./Switch";

describe("Switch Component", () => {
  describe("Rendering and basic states", () => {
    test("renders switch with label", () => {
      render(<Switch label="Notifications" />);
      expect(screen.getByText("Notifications")).toBeInTheDocument();
    });

    test("renders switch with description", () => {
      render(<Switch description="Receive email notifications" />);
      expect(
        screen.getByText("Receive email notifications"),
      ).toBeInTheDocument();
    });

    test("renders switch with label and description", () => {
      render(
        <Switch
          label="Notifications"
          description="Receive email notifications"
        />,
      );
      expect(screen.getByText("Notifications")).toBeInTheDocument();
      expect(
        screen.getByText("Receive email notifications"),
      ).toBeInTheDocument();
    });

    test("applies custom className", () => {
      const { container } = render(<Switch className="custom-class" />);
      expect(container.firstChild).toHaveClass("custom-class");
    });

    test("can be checked (on)", () => {
      render(<Switch checked onChange={() => {}} />);
      const switchInput = screen.getByRole("checkbox");
      expect(switchInput).toBeChecked();
    });

    test("can be unchecked (off)", () => {
      render(<Switch checked={false} onChange={() => {}} />);
      const switchInput = screen.getByRole("checkbox");
      expect(switchInput).not.toBeChecked();
    });

    test("can be disabled", () => {
      render(<Switch disabled />);
      const switchInput = screen.getByRole("checkbox");
      expect(switchInput).toBeDisabled();
    });

    test("forwards ref to input element", () => {
      const ref = { current: null };
      render(<Switch ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe("Sizes", () => {
    test("applies small size class", () => {
      const { container } = render(<Switch size="small" />);
      const switchLabel = container.querySelector("label");
      expect(switchLabel).toHaveClass("small");
    });

    test("applies medium size by default", () => {
      const { container } = render(<Switch />);
      const switchLabel = container.querySelector("label");
      expect(switchLabel).toHaveClass("medium");
    });

    test("applies large size class", () => {
      const { container } = render(<Switch size="large" />);
      const switchLabel = container.querySelector("label");
      expect(switchLabel).toHaveClass("large");
    });
  });

  describe("Event handling", () => {
    test("handles change events", () => {
      const handleChange = jest.fn();
      render(<Switch onChange={handleChange} />);
      const switchInput = screen.getByRole("checkbox");
      fireEvent.click(switchInput);
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test("calls onChange with correct event", () => {
      const handleChange = jest.fn();
      render(<Switch onChange={handleChange} />);
      const switchInput = screen.getByRole("checkbox");
      fireEvent.click(switchInput);
      expect(handleChange.mock.calls[0][0].target).toBeInstanceOf(
        HTMLInputElement,
      );
    });
  });
});
