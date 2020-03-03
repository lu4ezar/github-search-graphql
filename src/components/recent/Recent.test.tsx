/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Recent from "./Recent";
import "jest-styled-components";

interface TestRecentProps {
  searchHistory?: string[];
  getSearchStringFromHistory?: () => void;
}

const renderRecent = (props?: TestRecentProps) => {
  const utils = render(
    <Recent
      searchHistory={["abc", "def", "ghi"]}
      getSearchStringFromHistory={jest.fn()}
      {...props}
    />
  );
  return { ...utils };
};

it("matches the snapshot", () => {
  const { container } = renderRecent();
  expect(container).toMatchSnapshot();
});

it("renders list of recent searches", () => {
  const { getAllByTitle } = renderRecent();
  const listItems = getAllByTitle(/search for/i);
  expect(listItems).toHaveLength(3);
});

it("calls getSearchStringFromHistory prop function on List Item click", () => {
  const getSearchStringFromHistory = jest.fn();
  const { getByText } = renderRecent({
    getSearchStringFromHistory
  });
  const listItem = getByText("abc");
  fireEvent.click(listItem);
  expect(getSearchStringFromHistory).toBeCalledTimes(1);
  expect(getSearchStringFromHistory).toBeCalledWith("abc");
});

it("calls getSearchStringFromHistory prop function on List Item key press", () => {
  const getSearchStringFromHistory = jest.fn();
  const { getByText } = renderRecent({
    getSearchStringFromHistory
  });
  const listItem = getByText("def");
  fireEvent.keyDown(listItem);
  expect(getSearchStringFromHistory).toBeCalledTimes(1);
  expect(getSearchStringFromHistory).toBeCalledWith("def");
});

it("collapses list by clicking on its header", () => {
  const { getByText, getByRole } = renderRecent();
  const header = getByText("Search History");
  const list = getByRole("list");
  expect(list.classList.contains("collapsed")).toBe(true);
  fireEvent.click(header);
  expect(list.classList.contains("collapsed")).toBe(false);
  fireEvent.click(header);
  expect(list.classList.contains("collapsed")).toBe(true);
});

it("does not show 'Collapse/Expand' button on desktop", () => {
  const { getByTitle } = renderRecent();
  const icon = getByTitle(/expand/i);
  // @ts-ignore
  expect(icon).toHaveStyleRule({
    media: `(min-width: 1024px) {
      display: none;
    }`
  });
});

it("does not show 'Collapse/Expand' button if list is empty", () => {
  const { queryByTitle } = renderRecent({
    searchHistory: []
  });
  const icon = queryByTitle(/expand/i);
  expect(icon).toBe(null);
});

it("shows 'Collapse/Expand' button if list is not empty", () => {
  const { getByTitle } = renderRecent();
  const icon = getByTitle(/expand/i);
  expect(icon.classList.contains("invisible")).toBe(false);
});
