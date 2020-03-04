import { ChangeEvent } from "react";
import { GetReposVariables } from "../apollo/client/__generated__/GetRepos";

export type SearchString = GetReposVariables["searchString"];
export type SearchHistory = SearchString[];

export interface ListProps {
  searchString: SearchString;
  updateHistory: (searchString: SearchString) => void;
}

export interface RecentProps {
  searchHistory: SearchHistory;
  getSearchStringFromHistory: (str: SearchString) => void;
}

export interface InputProps {
  value: React.InputHTMLAttributes<HTMLInputElement>["value"];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  clearInput: () => void;
}
