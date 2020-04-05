import { QUERY } from "../../apollo/client";

const request = {
  query: QUERY,
  variables: {
    searchString: "styled"
  }
};

const requestFetchMore = {
  query: QUERY,
  variables: {
    searchString: "styled",
    after: "Y3Vyc29yOjE="
  }
};

const requestFetchMoreMore = {
  query: QUERY,
  variables: {
    searchString: "styled",
    after: "Y3Vyc29yOjI="
  }
};

const requestError = {
  query: QUERY,
  variables: {
    searchString: "error"
  }
};

const result = {
  data: {
    search: {
      __typename: "SearchResultItemConnection",
      edges: [
        {
          node: {
            __typename: "Repository",
            homepageUrl: "https://styled-components.com",
            name: "styled-components",
            description:
              "Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅",
            url: "https://github.com/styled-components/styled-components",
            stargazers: {
              totalCount: 27623,
              __typename: "StargazerConnection"
            },
            watchers: { totalCount: 385, __typename: "UserConnection" }
          },
          cursor: "Y3Vyc29yOjE=",
          __typename: "SearchResultItemEdge"
        },
        {
          node: {
            __typename: "Repository",
            homepageUrl: "https://styled-components.com",
            name: "styled-components",
            description:
              "Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅",
            url: "https://github.com/styled-components/styled-components",
            stargazers: {
              totalCount: 27623,
              __typename: "StargazerConnection"
            },
            watchers: { totalCount: 385, __typename: "UserConnection" }
          },
          cursor: "Y3Vyc29yOjE=",
          __typename: "SearchResultItemEdge"
        },
        {
          node: {
            __typename: "Repository",
            homepageUrl: "https://styled-components.com",
            name: "styled-components",
            description:
              "Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅",
            url: "https://github.com/styled-components/styled-components",
            stargazers: {
              totalCount: 27623,
              __typename: "StargazerConnection"
            },
            watchers: { totalCount: 385, __typename: "UserConnection" }
          },
          cursor: "Y3Vyc29yOjE=",
          __typename: "SearchResultItemEdge"
        }
      ]
    }
  }
};

const resultFetchMore = {
  data: {
    search: {
      __typename: "SearchResultItemConnection",
      edges: [
        {
          node: {
            __typename: "Repository",
            homepageUrl: "https://styled-system.com",
            name: "styled-system",
            description: "⬢ Style props for rapid UI development",
            url: "https://github.com/styled-system/styled-system",
            stargazers: {
              totalCount: 5334,
              __typename: "StargazerConnection"
            },
            watchers: { totalCount: 46, __typename: "UserConnection" }
          },
          cursor: "Y3Vyc29yOjI=",
          __typename: "SearchResultItemEdge"
        }
      ]
    }
  }
};

const resultError = new Error("error!");

// we need one additional mocked fetchMore request
// due to infinite-loader default pre-fetch threshold
const mocks = [
  {
    request,
    result
  },
  {
    request: requestFetchMore,
    result: resultFetchMore
  },
  {
    request: requestFetchMoreMore,
    result: resultFetchMore
  },
  {
    request: requestError,
    error: resultError
  }
];

export default mocks;
