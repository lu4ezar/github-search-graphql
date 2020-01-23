/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Recent from "./Recent";
import "jest-styled-components";

const recentProps = {
  searchHistory: ["abc", "def", "ghi"],
  getSearchStringFromHistory: jest.fn()
};

const recentPropsNoData = {
  searchHistory: [],
  getSearchStringFromHistory: jest.fn()
};

const renderComponent = () => ({
  ...render(<Recent {...recentProps} />)
});
const renderComponentNoData = () => ({
  ...render(<Recent {...recentPropsNoData} />)
});

afterEach(cleanup);

it("matches the snapshot", () => {
  const { container } = renderComponent();
  expect(container).toMatchSnapshot();
});

it("renders list of recent searches", () => {
  const { getAllByTitle } = renderComponent();
  const listItems = getAllByTitle(/search for/i);
  expect(listItems).toHaveLength(3);
});

it("calls getSearchStringFromHistory prop function on List Item click", () => {
  const { getByText } = renderComponent();
  const listItem = getByText("abc");
  fireEvent.click(listItem);
  expect(recentProps.getSearchStringFromHistory).toBeCalledTimes(1);
  fireEvent.keyDown(listItem);
  expect(recentProps.getSearchStringFromHistory).toBeCalledTimes(2);
  fireEvent.keyDown(listItem);
  expect(recentProps.getSearchStringFromHistory).toBeCalledTimes(3);
  fireEvent.keyDown(listItem);
  expect(recentProps.getSearchStringFromHistory).toBeCalledTimes(4);
});

it("calls getSearchStringFromHistory prop function on List Item key press", () => {
  const { getByText } = renderComponent();
  const listItem = getByText("abc");
  fireEvent.keyDown(listItem);
  expect(recentProps.getSearchStringFromHistory).toBeCalled();
});

it("collapses list by clicking on its header", () => {
  const { getByText, getByRole } = renderComponent();
  const header = getByText("Search History");
  const list = getByRole("list");
  expect(list.classList.contains("collapsed")).toBe(true);
  fireEvent.click(header);
  expect(list.classList.contains("collapsed")).toBe(false);
  fireEvent.click(header);
  expect(list.classList.contains("collapsed")).toBe(true);
});

it("does not show 'Collapse/Expand' button on desktop", () => {
  const { getByTitle } = renderComponent();
  const icon = getByTitle(/expand/i);
  // @ts-ignore
  expect(icon).toHaveStyleRule({
    media: `(min-width: 1024px) {
      display: none;
    }`
  });
});

it("does not show 'Collapse/Expand' button if list is empty", () => {
  const { queryByTitle } = renderComponentNoData();
  const icon = queryByTitle(/expand/i);
  expect(icon).toBe(null);
});

it("shows 'Collapse/Expand' button if list is not empty", () => {
  const { getByTitle } = renderComponent();
  const icon = getByTitle(/expand/i);
  expect(icon.classList.contains("invisible")).toBe(false);
});
