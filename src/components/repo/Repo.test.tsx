/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render } from "@testing-library/react";
import Repo from "./Repo";

const repoProps = {
  homepageUrl: null,
  name: "github-search-graphql",
  description: "Now with Github API v4! (graphql)",
  url: "https://github.com/lu4ezar/github-search-graphql",
  stargazers: 0,
  watchers: 1
};

it("matches the snapshot", () => {
  const { container } = render(<Repo {...(repoProps as any)} />);
  expect(container).toMatchSnapshot();
});

it("can show 'No description was provided' message", () => {
  const { getByText } = render(
    <Repo {...(repoProps as any)} description={null} />
  );
  const message = getByText("No description was provided");
  expect(message).toBeInTheDocument();
});

it("shows Homepage link", () => {
  const homepageUrl = "https://www.google.com";
  const { getByTitle } = render(
    <Repo {...(repoProps as any)} homepageUrl={homepageUrl} />
  );
  const link = getByTitle("homepage");
  expect(link).toHaveAttribute("href", homepageUrl);
});
