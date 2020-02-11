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

const renderList = (variable = "styled") => ({
  ...render(
    <MockedProvider mocks={mocks} addTypename>
      <List updateHistory={jest.fn()} searchString={variable} />
    </MockedProvider>
  )
});

describe("List component", () => {
  it("renders without errors", () => {
    const { container } = renderList("");
    expect(container).toBeInTheDocument();
  });

  it("shows error message if request was failed", async () => {
    const { getByText } = renderList("error");
    const err = await waitForElement(() => getByText(/error/i));
    expect(err).toBeTruthy();
  });

  it("shows spinner while fetching", async () => {
    const { getByTestId } = renderList();
    const spinner = getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
    await waitForElementToBeRemoved(() => getByTestId("spinner"));
  });

  it("shows repos list with 'filled' classname if request was successful", async () => {
    const { container, getAllByRole } = renderList();
    const listItems = await waitForElement(() => getAllByRole("listitem"));
    expect(listItems).toHaveLength(3);
    expect(
      (container.firstChild as HTMLElement).classList.contains("filled")
    ).toBe(true);
  });

  it("calls scrollFetchMore function when user has scrolled to bottom", async () => {
    const scrollFetchMore = jest.fn();
    const { getByRole } = renderList();
    const scrollContainer = await waitForElement(() => getByRole("list"));
    scrollContainer.addEventListener("scroll", scrollFetchMore);
    fireEvent.scroll(scrollContainer, {
      target: { scrollY: 100 }
    });
    expect(scrollFetchMore).toBeCalled();
  });
});
