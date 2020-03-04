import { SyntheticEvent } from "react";
import { useQuery as useApolloQuery } from "@apollo/react-hooks";
import { QUERY } from "../apollo/client";
import { GetRepos } from "../apollo/client/__generated__/GetRepos";
import { ListProps } from "../interfaces";

const useCustomQuery = ({ searchString, updateHistory }: ListProps) => {
  const { data, loading, error, fetchMore } = useApolloQuery(QUERY, {
    variables: {
      searchString
    },
    notifyOnNetworkStatusChange: true,
    skip: !searchString || searchString.length < 4,
    onCompleted: () => {
      if (searchString && !error) {
        updateHistory(searchString);
      }
    }
  });

  const updateQuery = (
    prev: GetRepos,
    { fetchMoreResult }: { fetchMoreResult?: GetRepos }
  ) => {
    if (!fetchMoreResult) {
      return prev;
    }
    return {
      ...fetchMoreResult,
      search: {
        ...fetchMoreResult.search,
        edges: [...prev?.search.edges, ...fetchMoreResult?.search.edges]
      }
    };
  };

  const scrollFetchMore = (e: SyntheticEvent) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    const listBottom = scrollHeight - scrollTop <= clientHeight + 100;
    if (!listBottom || loading) {
      return undefined;
    }
    const { edges } = data?.search;
    const lastItemCursor = edges[edges.length - 1].cursor;

    // https://github.com/apollographql/apollo-client/issues/4114#issuecomment-502111099
    try {
      return fetchMore({
        variables: {
          after: lastItemCursor
        },
        updateQuery
      });
    } catch (err) {
      return undefined;
    }
  };

  return {
    loading,
    repos: data?.search?.edges,
    error: error?.message,
    scrollFetchMore
  };
};

export default useCustomQuery;
