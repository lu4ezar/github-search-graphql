import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
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

const performQuery = async (word = "styled") => {
  const utils = renderApp();
  const input = utils.getByRole("searchbox");
  fireEvent.change(input, {
    target: {
      value: word
    }
  });
  expect(utils.getByTestId("spinner")).toBeInTheDocument();
  await waitForElementToBeRemoved(() => utils.getByTestId("spinner"));
  return utils;
};

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
    expect(utils.getByTestId("spinner")).toBeInTheDocument();
    await waitForElementToBeRemoved(() => utils.getByTestId("spinner"));
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
    const closeButton = getByTitle(/clear/i);
    fireEvent.click(closeButton);
    expect(input.value).toEqual("");
  });

  it("sets input value by clicking history list item", async () => {
    const utils = await performQuery();
    const historyComponent = utils.getByTestId("history");
    const historyItem = within(historyComponent).getByText(/styled/i);
    fireEvent.click(historyItem);
    const input = utils.getByRole("searchbox") as HTMLInputElement;
    expect(input.value).toEqual("styled");
  });
});
