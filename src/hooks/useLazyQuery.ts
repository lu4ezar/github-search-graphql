import { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { useLazyQuery as useApolloQuery } from "@apollo/react-hooks";
import { QUERY } from "../apollo/client";
import { GetRepos } from "../apollo/client/__generated__/GetRepos";
import { ListProps } from "../interfaces";

const useCustomQuery = ({ searchString, updateHistory }: ListProps) => {
  const [hasNextPage, setHasNextPage] = useState(true);
  const [getQuery, { data, loading, error, fetchMore }] = useApolloQuery(
    QUERY,
    {
      notifyOnNetworkStatusChange: true,
      onCompleted: () => {
        setHasNextPage(true);
        updateHistory(searchString);
      }
    }
  );

  useEffect(() => {
    const getQueryDebounce = debounce(getQuery, 500);
    if (searchString.length > 3) {
      getQueryDebounce({ variables: { searchString } });
    }
    return () => getQueryDebounce.cancel();
  }, [getQuery, searchString]);

  const updateQuery = (
    prev: GetRepos,
    { fetchMoreResult }: { fetchMoreResult?: GetRepos }
  ) => {
    if (!fetchMoreResult?.search?.edges?.length) {
      setHasNextPage(false);
      return prev;
    }
    setHasNextPage(true);
    return {
      ...fetchMoreResult,
      search: {
        ...fetchMoreResult.search,
        edges: [...prev?.search.edges, ...fetchMoreResult?.search.edges]
      }
    };
  };

  const fetchMoreRepos = () => {
    const { edges } = data.search;
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
    hasNextPage,
    fetchMore: fetchMoreRepos
  };
};

export default useCustomQuery;
