import React from "react";
import Octicon, { ChevronUp, ChevronDown } from "@primer/octicons-react";
import {
  HistoryItem,
  RecentDiv,
  Panel,
  Heading,
  Button,
  CollapsableListDiv
} from "./styled";

const Recent = ({ searchHistory, getValueFromHistory }: any) => {
  const [isCollapsed, changeCollapseState] = React.useState(true);
  const list = searchHistory.length
    ? searchHistory.map((searchWord: string, index: number) => (
        <HistoryItem
          title={`search for "${searchWord}" again`}
          key={searchWord}
          onClick={() => getValueFromHistory(searchWord)}
          onKeyDown={() => getValueFromHistory(searchWord)}
          role="button"
          tabIndex={index}
        >
          {searchWord}
        </HistoryItem>
      ))
    : null;
  const onClick = () =>
    isCollapsed ? changeCollapseState(false) : changeCollapseState(true);
  const currentIcon = isCollapsed ? ChevronDown : ChevronUp;
  const collapsedClassName = isCollapsed ? "collapsed" : "";
  return (
    <RecentDiv>
      <Panel>
        <Heading>Search History</Heading>
        {!!searchHistory.length && (
          <Button type="button" onClick={onClick}>
            <Octicon icon={currentIcon} size="medium" />
          </Button>
        )}
      </Panel>
      <CollapsableListDiv className={collapsedClassName}>
        {list}
      </CollapsableListDiv>
    </RecentDiv>
  );
};

export default Recent;
