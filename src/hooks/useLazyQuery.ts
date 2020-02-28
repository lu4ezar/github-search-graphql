import { useEffect, SyntheticEvent } from "react";
import { useLazyQuery as useApolloLazyQuery } from "@apollo/react-hooks";
import { QUERY } from "../apollo/client";
import { GetRepos } from "../apollo/client/__generated__/GetRepos";
import { SearchString } from "../interfaces";

export interface ListProps {
  searchString: SearchString;
  updateHistory: (searchString: SearchString) => void;
}

const useCustomQuery = ({ searchString, updateHistory }: ListProps) => {
  const variables = {
    searchString
  };
  const onCompleted = () => {
    updateHistory(searchString);
  };
  const [getQuery, { data, loading, error, fetchMore }] = useApolloLazyQuery(
    QUERY,
    {
      variables,
      onCompleted
    }
  );

  useEffect(() => {
    if (searchString.length > 3) {
      getQuery();
    }
  }, [getQuery, searchString]);

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
    const listBottom = scrollHeight - scrollTop === clientHeight;
    if (!listBottom) {
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
