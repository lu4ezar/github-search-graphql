import React from "react";
import { InputDiv, Clear } from "./styled";
import { InputProps } from "../../interfaces";

const Input = ({ value, onChange, clearInput, refProp }: InputProps) => (
  <InputDiv>
    <label htmlFor="search">
      <input
        id="search"
        type="search"
        onChange={onChange}
        placeholder="github-search-graphql"
        value={value}
        ref={refProp}
      />
    </label>
    <Clear
      className={value ? "show" : ""}
      onClick={clearInput}
      title="clear input"
    >
      &times;
    </Clear>
  </InputDiv>
);

export default Input;
