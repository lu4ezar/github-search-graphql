import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

it("matches the snapshot", () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});

it("renders app title", () => {
  const { getByText } = render(<Header />);
  const textLink = getByText("GITHUB SEARCH");
  expect(textLink).toBeInTheDocument();
});
