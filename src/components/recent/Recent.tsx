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

type RecentProps = {
  searchHistory: string[];
  getSearchStringFromHistory: (str: string) => void;
};

const Recent = ({ searchHistory, getSearchStringFromHistory }: RecentProps) => {
  const [isCollapsed, changeCollapseState] = React.useState(true);
  const list: React.ReactNode[] | null = searchHistory.length
    ? searchHistory.map(
        (searchWord, index: number): React.ReactNode => (
          <HistoryItem
            title={`search for "${searchWord}" again`}
            key={searchWord}
            onClick={() => getSearchStringFromHistory(searchWord)}
            onKeyDown={() => getSearchStringFromHistory(searchWord)}
            role="button"
            tabIndex={index}
          >
            {searchWord}
          </HistoryItem>
        )
      )
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
