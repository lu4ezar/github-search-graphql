import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto auto 1fr auto auto;
  grid-template-areas:
    "header"
    "aside_input"
    "list"
    "aside_recent"
    "footer";
  @media (min-width: 1024px) {
    font-size: 1.5rem;
    grid-template-areas:
      "header header"
      "aside_input list"
      "aside_recent list"
      "aside_recent footer";
    padding: 2rem 5rem 2rem 5rem;
    grid-template-columns: 2fr 4fr;
    grid-template-rows: auto 1fr 7fr auto;
  }
  @media (min-width: 1280px) {
    padding: 2rem 10rem 2rem 10rem;
  }
  & > div {
    border-radius: 4px;
    box-shadow: 2px 5px 10px #262323;
    background: ghostwhite;
    padding: 1em;
  }
`;

export default Container;
