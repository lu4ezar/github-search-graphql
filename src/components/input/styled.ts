import styled from "styled-components";

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: aside_input;
  & label {
    max-width: 90%;
  }
  & input {
    background: transparent;
    border: 0;
    outline: 0;
    border-bottom: 2px solid black;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    width: 100%;
    &::placeholder {
      font-weight: normal;
      font-style: italic;
    }
  }
`;
export const Close = styled.span`
  width: 0;
  position: relative;
  right: 1em;
  cursor: pointer;
  color: #262323;
  visibility: hidden;
  font-size: 1.5rem;
  font-weight: bold;
  &.show {
    visibility: visible;
  }
`;
