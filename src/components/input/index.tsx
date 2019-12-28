import React from "react";
import { InputDiv, Close } from "./styled";

const Input = ({ searchString, handleInput, clearInput }: any) => {
  const visibility = searchString ? "show" : "";
  return (
    <InputDiv className="input">
      <label htmlFor="search">
        <input
          id="search"
          type="search"
          onChange={handleInput}
          placeholder="github-search-graphql"
          value={searchString}
        />
      </label>
      <Close className={visibility} onClick={clearInput}>
        &times;
      </Close>
    </InputDiv>
  );
};

export default Input;
