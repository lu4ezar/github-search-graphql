/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import React, { SyntheticEvent, CSSProperties } from "react";
import { FixedSizeList as ReactWindowList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { GetRepos_search_edges_node_Repository } from "../../apollo/client/__generated__/GetRepos";
import { ListProps } from "../../interfaces";
import useCustomQuery from "../../hooks/useLazyQuery";
import Repo from "../repo";
import Spinner from "../spinner";
import ListDiv from "./styled";

const GUTTER_SIZE = 16;
const ROW_HEIGHT = 250;

const List = (props: ListProps) => {
  const { loading, repos = [], error, fetchMore, hasNextPage } = useCustomQuery(
    props
  );

  const handleScroll = (e: SyntheticEvent) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    // 100 pixels added for mobile browsers with dynamic controls (Opera Touch)
    const listBottom = scrollHeight - scrollTop <= clientHeight + 100;
    if (listBottom && !loading) {
      fetchMore();
    }
  };

  const Row = ({ index, style }: { index: number; style: CSSProperties }) => (
    <Repo
      style={{
        ...style,
        top: Number(style.top) + 16,
        height: Number(style.height) - 16
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(repos[index].node as GetRepos_search_edges_node_Repository)}
    />
  );

  const getRepoList = () =>
    repos.length && (
      <AutoSizer>
        {({ height, width }) => (
          <ReactWindowList
            initialScrollOffset={0}
            height={height}
            width={width}
            itemCount={repos.length}
            itemSize={ROW_HEIGHT - GUTTER_SIZE}
          >
            {Row}
          </ReactWindowList>
        )}
      </AutoSizer>
    );

  return (
    <>
      <ListDiv data-testid="repoList">
        {!!repos.length && getRepoList()}
        {error && <p>{error}</p>}
      </ListDiv>
      <Spinner loading={loading} />
    </>
  );
};

export default List;
