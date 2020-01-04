import React from "react";
import Octicon, { ChevronUp, ChevronDown } from "@primer/octicons-react";
import {
  HistoryItem,
  RecentDiv,
  Panel,
  Arrow,
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
  return (
    <RecentDiv>
      <Panel>
        <Button type="button" onClick={onClick}>
          Search History
          <Arrow className={!searchHistory.length ? "invisible" : ""}>
            <Octicon icon={currentIcon} size="medium" />
          </Arrow>
        </Button>
      </Panel>
      <CollapsableListDiv className={isCollapsed ? "collapsed" : ""}>
        {list}
      </CollapsableListDiv>
    </RecentDiv>
  );
};

export default Recent;
