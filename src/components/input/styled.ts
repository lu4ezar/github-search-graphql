import styled from "styled-components";

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: aside_input;
  & label {
    max-width: 90%;
    padding: 0.5rem 0;
  }
  & input {
    background: transparent;
    border: 0;
    outline: 0;
    border-bottom: 2px solid black;
    margin-bottom: 0.1rem;
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
    width: 100%;
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
    &::placeholder {
      font-weight: normal;
      font-style: italic;
    }
  }
`;
export const Clear = styled.span`
  width: 0;
  position: relative;
  right: 1em;
  cursor: pointer;
  color: #262323;
  visibility: hidden;
  font-weight: bold;
  &.show {
    visibility: visible;
  }
`;
