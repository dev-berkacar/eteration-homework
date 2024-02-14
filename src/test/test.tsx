import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

describe("App", () => {
  test("renders correctly", () => {
    render(<App />);
    const text = screen.getByText("Initialized correctly!") as HTMLElement;
    expect(text).toBeInTheDocument();
  });

  test("handles click event", () => {
    render(<App />);
    const button = screen.getByText("Click Me") as HTMLElement;
    fireEvent.click(button);
    const clickedText = screen.getByText("Button clicked!") as HTMLElement;
    expect(clickedText).toBeInTheDocument();
  });
});
