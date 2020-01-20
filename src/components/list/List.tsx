/* eslint-disable camelcase */
import React, { useEffect, SyntheticEvent } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import {
  GetRepos_search,
  GetRepos_search_edges,
  GetRepos_search_edges_node_Repository,
  GetRepos
} from "../../apollo/client/__generated__/GetRepos";
import { SearchString } from "../../interfaces";
import { QUERY } from "../../apollo/client";
import Repo from "../repo";
import { CenteredLoader, ListDiv, StyledUl } from "./styled";

interface ListProps {
  searchString: SearchString;
  updateHistory: (searchString: SearchString) => void;
}

const getRepoList = (repos: GetRepos_search["edges"]) => (
  <StyledUl>
    {(repos as GetRepos_search_edges[]).map(({ node, cursor }) => (
      <Repo
        key={cursor}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...(node as GetRepos_search_edges_node_Repository)}
      />
    ))}
  </StyledUl>
);

const List = ({ searchString, updateHistory }: ListProps) => {
  const [getRepos, { called, loading, data, error, fetchMore }] = useLazyQuery<
    GetRepos
  >(QUERY, {
    onCompleted: () => {
      if (error) return;
      if (data?.search?.edges?.length) {
        updateHistory(searchString);
      }
    },
    variables: {
      searchString
    },
    errorPolicy: "all"
  });

  useEffect(() => {
    if (!searchString || searchString.length < 4) {
      return;
    }
    getRepos({
      variables: {
        searchString
      }
    });
  }, [searchString, getRepos]);

  const onScroll = (e: SyntheticEvent) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    const listBottom = scrollHeight - scrollTop === clientHeight;
    if (!listBottom || !data) {
      return undefined;
    }
    const { edges } = data.search;
    const lastItemCursor =
      edges !== null ? edges[edges.length - 1]!.cursor : "";
    return fetchMore({
      variables: {
        after: lastItemCursor
      },
      updateQuery: (
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
        return data ? getRepoList(data.search.edges) : null;
      default:
        return null;
    }
  };

  return (
    <ListDiv className={dataLength ? "filled" : ""} onScroll={onScroll}>
      {getListContent()}
    </ListDiv>
  );
};

export default List;
