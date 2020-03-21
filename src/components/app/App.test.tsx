import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  within
} from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import mocks from "../list/mocks";
import App from "./App";

const renderApp = () =>
  render(
    <MockedProvider mocks={mocks} addTypename>
      <App />
    </MockedProvider>
  );

describe("App component", () => {
  it("renders without crashing", () => {
    renderApp();
  });

  it("updates history after successful request", async () => {
    const utils = renderApp();
    const historyContainer = utils.getByTestId("history");
    let items = within(historyContainer).queryAllByRole("button");
    expect(items).toHaveLength(0);
    const input = utils.getByRole("searchbox");
    fireEvent.change(input, {
      target: {
        value: "styled"
      }
    });
    // waiting for search results to show up
    const repoList = utils.getByTestId("repoList");
    await waitForElement(() => within(repoList).getAllByRole("listitem"));

    items = within(historyContainer).queryAllByRole("button");
    expect(items).toHaveLength(1);
  });

  it("clears input on Clear button click", async () => {
    const { getByRole, getByTitle } = renderApp();
    const input = getByRole("searchbox") as HTMLInputElement;
    fireEvent.change(input, {
      target: {
        value: "styled"
      }
    });
    expect(input.value).toEqual("styled");
    const clearButton = getByTitle(/clear/i);
    fireEvent.click(clearButton);
    expect(input.value).toEqual("");
  });

  it("sets input value by clicking history list item", async () => {
    const utils = renderApp();
    const input = utils.getByRole("searchbox") as HTMLInputElement;
    fireEvent.change(input, {
      target: {
        value: "styled"
      }
    });
    // waiting for search results to show up
    const repoList = utils.getByTestId("repoList");
    await waitForElement(() => within(repoList).getAllByRole("listitem"));
    // clear input
    const clearButton = utils.getByTitle(/clear/i);
    fireEvent.click(clearButton);
    expect(input.value).toEqual("");
    // click on history item
    const historyComponent = utils.getByTestId("history");
    const historyItem = within(historyComponent).getByText(/styled/i);
    fireEvent.click(historyItem);
    expect(input.value).toEqual("styled");
  });
});
