/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render } from "@testing-library/react";
import Repo from "./Repo";
import { GetRepos_search_edges_node_Repository as RepoProps } from "../../apollo/client/__generated__/GetRepos";

const repoProps: RepoProps = {
  __typename: "Repository",
  homepageUrl: null,
  name: "github-search-graphql",
  description: "Now with Github API v4! (graphql)",
  url: "https://github.com/lu4ezar/github-search-graphql",
  stargazers: {
    __typename: "StargazerConnection",
    totalCount: 0
  },
  watchers: {
    __typename: "UserConnection",
    totalCount: 1
  }
};

const renderComponent = ({ ...additionalProps } = {}) =>
  render(<Repo {...repoProps} {...additionalProps} />);

it("matches the snapshot", () => {
  const { container } = renderComponent();
  expect(container).toMatchSnapshot();
});

it("can show 'No description was provided' message", () => {
  const description = null;
  const { getByText } = renderComponent({ description });
  const message = getByText("No description was provided");
  expect(message).toBeInTheDocument();
});

it("shows Homepage link", () => {
  const homepageUrl = "https://www.google.com";
  const { getByTitle } = renderComponent({ homepageUrl });
  const link = getByTitle("homepage");
  expect(link).toHaveAttribute("href", homepageUrl);
});
