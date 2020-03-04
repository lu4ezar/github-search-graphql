/* eslint-disable camelcase */
import React from "react";
import {
  GetRepos_search_edges,
  GetRepos_search_edges_node_Repository
} from "../../apollo/client/__generated__/GetRepos";
import useCustomQuery, { ListProps } from "../../hooks/useLazyQuery";
import Repo from "../repo";
import Spinner from "../spinner";
import { ListDiv, StyledUl } from "./styled";

const List = (props: ListProps) => {
  const { loading, repos = [], error, scrollFetchMore } = useCustomQuery(props);

  const getRepoList = () => (
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

  return (
    <ListDiv
      className={repos.length && "filled"}
      onScroll={scrollFetchMore}
      data-testid="repoList"
    >
      {error ? <p>{error}</p> : getRepoList()}
      <Spinner loading={loading} />
    </ListDiv>
  );
};

export default List;
