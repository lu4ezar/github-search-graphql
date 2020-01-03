import React from "react";
import { InputDiv, Close } from "./styled";

const Input = ({ searchString, handleInput, clearInput }: any) => (
  <InputDiv>
    <label htmlFor="search">
      <input
        id="search"
        type="search"
        onChange={handleInput}
        placeholder="github-search-graphql"
        value={searchString}
      />
    </label>
    <Close className={searchString ? "show" : ""} onClick={clearInput}>
      &times;
    </Close>
  </InputDiv>
);

export default Input;
