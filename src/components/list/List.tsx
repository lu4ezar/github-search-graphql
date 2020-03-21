/* eslint-disable camelcase */
import React, { SyntheticEvent } from "react";
import {
  GetRepos_search_edges,
  GetRepos_search_edges_node_Repository
} from "../../apollo/client/__generated__/GetRepos";
import { ListProps } from "../../interfaces";
import useCustomQuery from "../../hooks/useLazyQuery";
import Repo from "../repo";
import Spinner from "../spinner";
import { ListDiv, StyledUl } from "./styled";

const List = (props: ListProps) => {
  const { loading, repos = [], error, fetchMore } = useCustomQuery(props);

  const handleScroll = (e: SyntheticEvent) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    // 100 pixels added for mobile browsers with dynamic controls (Opera Touch)
    const listBottom = scrollHeight - scrollTop <= clientHeight + 100;
    if (listBottom && !loading) {
      fetchMore();
    }
  };
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
      onScroll={handleScroll}
      data-testid="repoList"
    >
      {error ? <p>{error}</p> : getRepoList()}
      <Spinner loading={loading} />
    </ListDiv>
  );
};

export default List;
