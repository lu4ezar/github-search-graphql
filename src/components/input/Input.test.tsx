import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

const inputProps = {
  onChange: jest.fn(),
  clearInput: jest.fn()
};

const setup = (value: HTMLInputElement["value"] = "") => {
  const { onChange, clearInput } = inputProps;
  const utils = render(
    <Input onChange={onChange} clearInput={clearInput} value={value} />
  );
  const input = (value
    ? utils.getByDisplayValue(value)
    : utils.getByPlaceholderText("github-search-graphql")) as HTMLInputElement;
  const closeIcon = utils.queryByTitle("clear input");
  return {
    input,
    closeIcon,
    ...utils
  };
};

it("matches the snapshot", () => {
  const { input } = setup();
  expect(input).toMatchSnapshot();
});

it("shows props' value", () => {
  const { input } = setup("show this");
  expect(input.value).toBe("show this");
});

it("calls onChange prop function", () => {
  const { getByRole } = setup();
  const input = getByRole("searchbox");
  const event = { target: { value: "Q" } };
  fireEvent.change(input, event);
  expect(inputProps.onChange).toHaveBeenCalled();
});

it("shows Clear button if not empty", () => {
  const { closeIcon } = setup("non-empty value");
  expect(closeIcon?.classList.contains("show")).toBe(true);
});

it("does not show Clear button if empty", () => {
  const { closeIcon } = setup("");
  expect(closeIcon?.classList.contains("show")).toBe(false);
});

it("calls clearInput prop function", () => {
  const { closeIcon } = setup("non-empty value");
  userEvent.click(closeIcon as HTMLElement);
  expect(inputProps.clearInput).toHaveBeenCalled();
});
