import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  test("renders button with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies primary variant by default", () => {
    const { container } = render(<Button>Button</Button>);
    expect(container.firstChild).toHaveClass("primary");
  });

  test("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  test("shows loading spinner when isLoading is true", () => {
    render(<Button isLoading>Loading</Button>);
    expect(screen.getByText("Loading")).toBeInTheDocument();
    expect(screen.getByText("Loading").parentElement).toHaveClass("loading");
  });

  test("applies fullWidth class", () => {
    const { container } = render(<Button fullWidth>Full Width</Button>);
    expect(container.firstChild).toHaveClass("fullWidth");
  });

  test("applies different sizes", () => {
    const { container, rerender } = render(<Button size="small">Small</Button>);
    expect(container.firstChild).toHaveClass("small");

    rerender(<Button size="large">Large</Button>);
    expect(container.firstChild).toHaveClass("large");
  });
});
