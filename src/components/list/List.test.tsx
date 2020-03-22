import React from "react";
import {
  render,
  waitForElement,
  fireEvent,
  waitForElementToBeRemoved
} from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import List from "./List";
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

  it("shows repos list with 'filled' classname if request was successful", async () => {
    const { container, getAllByRole } = renderList();
    const listItems = await waitForElement(() => getAllByRole("listitem"));
    expect(listItems).toHaveLength(1);
    expect(
      (container.firstChild as HTMLDivElement).classList.contains("filled")
    ).toBe(true);
  });

  it("updates repo list when user has scrolled to bottom", async () => {
    const handleScroll = jest.fn();
    const { getByTestId, queryByTestId, getAllByRole } = renderList("styled");

    // waiting for search results to show up
    await waitForElement(() => queryByTestId("spinner"));
    await waitForElementToBeRemoved(() => queryByTestId("spinner"));
    const repos = await waitForElement(() => getAllByRole("listitem"));
    expect(repos).toHaveLength(1);

    const scrollContainer = getByTestId("repoList");
    scrollContainer.addEventListener("scroll", handleScroll);

    // set required for testing scroll container measurements
    Object.defineProperties(scrollContainer, {
      clientHeight: { value: 100, writable: true },
      scrollHeight: { value: 900, writable: true },
      scrollTop: { value: 0, writable: true }
    });

    // scroll event fires handleScroll function but does not fire query
    expect(handleScroll).toBeCalledTimes(0);
    fireEvent.scroll(scrollContainer);
    expect(handleScroll).toBeCalledTimes(1);
    expect(queryByTestId("spinner")).not.toBeInTheDocument();
    expect(getAllByRole("listitem")).toHaveLength(1);

    // scrolling to bottom fires next request
    scrollContainer.scrollTop =
      scrollContainer.scrollHeight - scrollContainer.clientHeight;
    fireEvent.scroll(scrollContainer);
    expect(getByTestId("spinner")).toBeInTheDocument();
    await waitForElementToBeRemoved(() => getByTestId("spinner"));
    expect(handleScroll).toBeCalledTimes(2);
    expect(getAllByRole("listitem")).toHaveLength(2);
  });
});
