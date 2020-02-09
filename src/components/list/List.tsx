/* eslint-disable camelcase */
import React from "react";
import Loader from "react-loader-spinner";
import {
  GetRepos_search,
  GetRepos_search_edges,
  GetRepos_search_edges_node_Repository
} from "../../apollo/client/__generated__/GetRepos";
import useCustomQuery, { ListProps } from "../../hooks/useLazyQuery";
import Repo from "../repo";

import { SpinnerWrapper, ListDiv, StyledUl } from "./styled";

const getRepoList = (repos: GetRepos_search["edges"]) => (
  <StyledUl>
    {(repos as GetRepos_search_edges[]).map(({ cursor, node }) => (
      <Repo
        key={cursor}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...(node as GetRepos_search_edges_node_Repository)}
      />
    ))}
  </StyledUl>
);

const List = (props: ListProps) => {
  const { loading, repos = [], error, scrollFetchMore } = useCustomQuery(props);

  const getListContent = () => {
    switch (true) {
      case !!error:
        return <p>{error}</p>;
      case loading:
        return (
          <SpinnerWrapper data-testid="spinner">
            <Loader type="Oval" color="gray" height={100} width={100} />
          </SpinnerWrapper>
        );
      case !!repos.length:
        return getRepoList(repos);
      default:
        return null;
    }
  };

  return (
    <ListDiv className={repos.length && "filled"} onScroll={scrollFetchMore}>
      {getListContent()}
    </ListDiv>
  );
};

export default List;