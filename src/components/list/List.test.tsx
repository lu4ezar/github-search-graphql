import React from "react";
import {
  render,
  waitForElement,
  fireEvent,
  waitForElementToBeRemoved
} from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import List, { ROW_HEIGHT } from "./List";
import mocks from "./mocks";

const renderList = (variable = "styled") =>
  render(
    <MockedProvider mocks={mocks} addTypename>
      <List updateHistory={jest.fn()} searchString={variable} />
    </MockedProvider>
  );

describe("List component", () => {
  it("renders without errors", () => {
    const { container } = renderList();
    expect(container).toBeInTheDocument();
  });

  it("shows error message if request was failed", async () => {
    const { getByText } = renderList("error");
    const err = await waitForElement(() => getByText(/error/i));
    expect(err).toBeTruthy();
  });

  it("shows spinner while fetching", async () => {
    const { getByTestId } = renderList();
    const spinner = await waitForElement(() => getByTestId("spinner"));
    expect(spinner).toBeInTheDocument();
    await waitForElementToBeRemoved(() => getByTestId("spinner"));
  });

  it("shows repos list if request was successful", async () => {
    const { getAllByRole, getByTestId } = renderList();
    const listItems = await waitForElement(() => getAllByRole("listitem"));
    expect(listItems).toHaveLength(3);
    await waitForElementToBeRemoved(() => getByTestId("spinner"));
  });

  it("updates repo list when user has scrolled to bottom", async () => {
    const {
      getByTestId,
      queryByTestId,
      getAllByRole,
      getAllByTestId
    } = renderList("styled");

    // initial query
    await waitForElement(() => queryByTestId("spinner"));
    await waitForElementToBeRemoved(() => queryByTestId("spinner"));
    const repos = getAllByRole("listitem");
    expect(repos).toHaveLength(3);

    const repoList = getByTestId("repoList");
    const autoSizer = repoList.firstChild as HTMLDivElement;
    const scrollContainer = autoSizer.firstChild as HTMLDivElement;

    // set scrollHeight for scroll container
    const SCROLL_HEIGHT = ROW_HEIGHT * 2;
    Object.defineProperties(scrollContainer, {
      scrollHeight: { value: SCROLL_HEIGHT, writable: true }
    });

    // scrolling a bit does not do anything
    scrollContainer.scrollTop = SCROLL_HEIGHT / 4;

    expect(queryByTestId("spinner")).not.toBeInTheDocument();
    expect(getAllByRole("listitem")).toHaveLength(3);

    // further scrolling fires next request
    scrollContainer.scrollTop = SCROLL_HEIGHT / 2;
    fireEvent.scroll(scrollContainer);
    await waitForElement(() => getAllByTestId("spinner"));
    await waitForElementToBeRemoved(() => getAllByTestId("spinner"));
    expect(getAllByRole("listitem")).toHaveLength(4);
  });
});
