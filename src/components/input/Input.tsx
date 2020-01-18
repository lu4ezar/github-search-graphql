import React from "react";
import { InputDiv, Clear } from "./styled";

interface InputProps {
  value: string | number | string[] | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearInput: () => void;
}

const Input = ({ value, onChange, clearInput }: InputProps) => (
  <InputDiv>
    <label htmlFor="search">
      <input
        id="search"
        type="search"
        onChange={onChange}
        placeholder="github-search-graphql"
        value={value}
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
