import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

it("matches the snapshot", () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});

it("renders text link", () => {
  const { getByText } = render(<Footer />);
  const textLink = getByText(
    "https://github.com/lu4ezar/github-search-graphql"
  );
  expect(textLink).toBeInTheDocument();
});

it("renders svg link to github source page", () => {
  const { getByTitle } = render(<Footer />);
  const svgLink = getByTitle("view src on Github");
  expect(svgLink).toBeInTheDocument();
  expect(svgLink).toHaveAttribute(
    "href",
    "https://github.com/lu4ezar/github-search-graphql"
  );
});
