import React from "react";
import { useLazyQuery } from "@apollo/react-hooks";

import { QUERY } from "../../apollo/client";
import Repo from "../repo";
import { CenteredLoader, ListDiv } from "./styled";

const getRepoList = (repos: any) =>
  // eslint-disable-next-line react/jsx-props-no-spreading
  repos.map(({ node, cursor }: any) => <Repo key={cursor} {...node} />);

const List = ({ searchString, updateHistory }: any) => {
  const [getRepos, { called, loading, data, error, fetchMore }] = useLazyQuery(
    QUERY,
    {
      onCompleted: () => {
        if (error) return;
        if (data.search.edges.length) {
          updateHistory(searchString);
        }
      },
      variables: {
        searchString,
        first: 30
      },
      errorPolicy: "all"
    }
  );

  React.useEffect(() => {
    if (!searchString || searchString.length < 4 || called) {
      return;
    }
    getRepos(searchString);
  }, [searchString, called, getRepos]);

  const onScroll = (e: React.SyntheticEvent) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    const listBottom = scrollHeight - scrollTop === clientHeight;
    if (!listBottom) {
      return undefined;
    }
    const { edges } = data.search;
    const lastItemCursor = edges[edges.length - 1].cursor;
    return fetchMore({
      variables: {
        after: lastItemCursor
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          ...fetchMoreResult,
          search: {
            ...fetchMoreResult.search,
            edges: [...prev.search.edges, ...fetchMoreResult.search.edges]
          }
        };
      }
    });
  };

  const dataLength = data?.search?.edges?.length;

  const getListContent = () => {
    switch (true) {
      case !!error:
        return <p>Error! Sorry there was an error!</p>;
      case called && loading:
        return (
          <CenteredLoader type="Oval" color="gray" height={100} width={100} />
        );
      case !!dataLength:
        return getRepoList(data.search.edges);
      default:
        return null;
    }
  };

  return (
    <ListDiv className={dataLength && "filled"} onScroll={onScroll}>
      {getListContent()}
    </ListDiv>
  );
};

export default List;
