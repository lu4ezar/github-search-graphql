import ApolloClient, { gql } from "apollo-boost";

export const QUERY = gql`
  query GetRepos($searchString: String!, $after: String) {
    search(type: REPOSITORY, after: $after, first: 30, query: $searchString) {
      edges {
        node {
          ... on Repository {
            homepageUrl
            name
            description
            descriptionHTML
            url
            stargazers {
              totalCount
            }
            watchers {
              totalCount
            }
          }
        }
        cursor
      }
    }
  }
`;

export const ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://github-search-graphql.herokuapp.com/"
    : "http://localhost:4000";

const client = new ApolloClient({
  uri: ENDPOINT
});

export default client;
