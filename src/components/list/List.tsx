/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import React, { CSSProperties, forwardRef } from "react";
import { FixedSizeList as ReactWindowList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import { GetRepos_search_edges_node_Repository } from "../../apollo/client/__generated__/GetRepos";
import { ListProps } from "../../interfaces";
import useCustomQuery from "../../hooks/useLazyQuery";
import Repo from "../repo";
import Spinner from "../spinner";
import ListDiv from "./styled";

const PADDING_SIZE = 15; // for top and bottom of the list
const GUTTER_SIZE = 25; // between items
const ROW_HEIGHT = 250; // item height

const List = (props: ListProps) => {
  const { loading, repos = [], error, fetchMore, hasNextPage } = useCustomQuery(
    props
  );

  const itemCount = hasNextPage ? repos.length + 1 : repos.length;
  const loadMoreItems = loading ? (): any => {} : fetchMore;
  const isItemLoaded = (index: number) => !hasNextPage || index < repos.length;

  const innerElementType = forwardRef(
    (
      { style, ...rest }: { style: CSSProperties },
      ref: React.Ref<HTMLDivElement>
    ) => (
      <div
        ref={ref}
        style={{
          ...style,
          height: `${parseFloat(style.height as string) + PADDING_SIZE}px`,
          paddingTop: PADDING_SIZE
        }}
        {...rest}
      />
    )
  );

  const Row = ({ index, style }: { index: number; style: CSSProperties }) => {
    const itemStyle = {
      ...style,
      top: Number(style.top) + PADDING_SIZE,
      height: Number(style.height) - GUTTER_SIZE
    };
    return isItemLoaded(index) ? (
      <Repo
        style={itemStyle}
        {...(repos[index].node as GetRepos_search_edges_node_Repository)}
      />
    ) : (
      <div style={itemStyle}>
        <Spinner loading />
      </div>
    );
  };

  const getRepoList = () =>
    repos.length && (
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={itemCount}
            loadMoreItems={loadMoreItems}
          >
            {({ onItemsRendered, ref }) => (
              <ReactWindowList
                innerElementType={innerElementType}
                initialScrollOffset={0}
                height={height}
                width={width}
                itemCount={itemCount}
                itemSize={ROW_HEIGHT - GUTTER_SIZE}
                ref={ref}
                onItemsRendered={onItemsRendered}
              >
                {Row}
              </ReactWindowList>
            )}
          </InfiniteLoader>
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
