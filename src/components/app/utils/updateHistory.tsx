import { SearchString, SearchHistory } from "../../../interfaces";

export const HISTORY_MAX_SIZE = 10;

const updateHistory = (
  searchString: SearchString,
  searchHistory: SearchHistory
) => {
  if (searchHistory.includes(searchString)) {
    return searchHistory;
  }
  const newHistorySize = searchHistory.unshift(searchString);
  if (newHistorySize > HISTORY_MAX_SIZE) {
    searchHistory.pop();
  }
  return searchHistory;
};

export default updateHistory;
