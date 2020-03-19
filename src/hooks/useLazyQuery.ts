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
      updateHistory(searchString);
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
    fetchMore: fetchMoreRepos
  };
};

export default useCustomQuery;
