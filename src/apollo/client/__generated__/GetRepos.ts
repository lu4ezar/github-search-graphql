/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRepos
// ====================================================

export interface GetRepos_search_edges_node_App {
  __typename: "App" | "Issue" | "MarketplaceListing" | "Organization" | "PullRequest" | "User";
}

export interface GetRepos_search_edges_node_Repository_stargazers {
  __typename: "StargazerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GetRepos_search_edges_node_Repository_watchers {
  __typename: "UserConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
}

export interface GetRepos_search_edges_node_Repository {
  __typename: "Repository";
  /**
   * The repository's URL.
   */
  homepageUrl: any | null;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * The description of the repository rendered to HTML.
   */
  descriptionHTML: any;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * A list of users who have starred this starrable.
   */
  stargazers: GetRepos_search_edges_node_Repository_stargazers;
  /**
   * A list of users watching the repository.
   */
  watchers: GetRepos_search_edges_node_Repository_watchers;
}

export type GetRepos_search_edges_node = GetRepos_search_edges_node_App | GetRepos_search_edges_node_Repository;

export interface GetRepos_search_edges {
  __typename: "SearchResultItemEdge";
  /**
   * The item at the end of the edge.
   */
  node: GetRepos_search_edges_node | null;
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface GetRepos_search {
  __typename: "SearchResultItemConnection";
  /**
   * A list of edges.
   */
  edges: (GetRepos_search_edges | null)[] | null;
}

export interface GetRepos {
  /**
   * Perform a search across resources.
   */
  search: GetRepos_search;
}

export interface GetReposVariables {
  searchString: string;
  after?: string | null;
}
