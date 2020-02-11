import { QUERY } from "../../apollo/client";

const preRequest = {
  query: QUERY,
  variables: {
    searchString: ""
  }
};

const request = {
  query: QUERY,
  variables: {
    searchString: "styled"
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
        },
        {
          node: {
            __typename: "Repository",
            homepageUrl: "http://npmjs.com/styled-jsx",
            name: "styled-jsx",
            description: "Full CSS support for JSX without compromises",
            url: "https://github.com/zeit/styled-jsx",
            stargazers: {
              totalCount: 5125,
              __typename: "StargazerConnection"
            },
            watchers: { totalCount: 54, __typename: "UserConnection" }
          },
          cursor: "Y3Vyc29yOjM=",
          __typename: "SearchResultItemEdge"
        }
      ]
    }
  }
};

const error = new Error("error!");

const mocks = [
  {
    request,
    result
  },
  {
    request: requestError,
    error
  },
  {
    request: preRequest
  }
];

export default mocks;
