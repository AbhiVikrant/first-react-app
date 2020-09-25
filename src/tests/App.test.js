import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/abhishek/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders abhishek ", () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/hello/i);
  expect(linkElement.length).toBe(6);
});
