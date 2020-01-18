import React from "react";
import { InputDiv, Close } from "./styled";

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
    <Close className={value ? "show" : ""} onClick={clearInput}>
      &times;
    </Close>
  </InputDiv>
);

export default Input;
