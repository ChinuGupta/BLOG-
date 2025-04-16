import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";

describe("Button component", () => {
  it("renders with given text", () => {
    render(<Button text="Click Me" />);
    expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
  });

  it("applies the provided className", () => {
    render(<Button text="Styled Button" className="custom-class" />);
    const buttonElement = screen.getByText("Styled Button");
    expect(buttonElement).toHaveClass("custom-class");
  });


  it("applied event is fired", () => {
    const handleClick = vi.fn(); 
    render(<Button onClick={handleClick} text="Event Button" />);
    fireEvent.click(screen.getByText(/Event Button/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});


