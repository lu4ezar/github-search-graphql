import React, { useState } from "react";
import Octicon, { ChevronUp, ChevronDown } from "@primer/octicons-react";
import {
  HistoryItem,
  RecentDiv,
  Panel,
  Arrow,
  Button,
  CollapsableListDiv
} from "./styled";
import { SearchString, RecentProps } from "../../interfaces";

const Recent = ({ searchHistory, getSearchStringFromHistory }: RecentProps) => {
  const [isCollapsed, changeCollapseState] = useState(true);
  const handleClick = (searchWord: SearchString) => {
    changeCollapseState(true);
    getSearchStringFromHistory(searchWord);
  };
  const list = searchHistory.length
    ? searchHistory.map((searchWord, index: number) => (
        <HistoryItem
          title={`search for "${searchWord}" again`}
          key={searchWord}
          onClick={() => handleClick(searchWord)}
          onKeyDown={() => handleClick(searchWord)}
          role="button"
          tabIndex={index}
        >
          {searchWord}
        </HistoryItem>
      ))
    : null;
  const onClick = () =>
    isCollapsed ? changeCollapseState(false) : changeCollapseState(true);
  const currentIcon = isCollapsed ? ChevronUp : ChevronDown;
  return (
    <RecentDiv>
      <Panel>
        <Button type="button" onClick={onClick}>
          Search History
          {!!searchHistory.length && (
            <Arrow title="expand/collapse">
              <Octicon icon={currentIcon} size="medium" />
            </Arrow>
          )}
        </Button>
      </Panel>
      <CollapsableListDiv
        className={isCollapsed ? "collapsed" : ""}
        data-testid="history"
      >
        {list}
      </CollapsableListDiv>
    </RecentDiv>
  );
};

export default Recent;
