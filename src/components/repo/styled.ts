import styled from "styled-components";

export const StyledRepo = styled.li`
  list-style-type: none;
  box-shadow: inset 0px 0px 5px #262323;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5em;
  margin-bottom: 1em;
  border-radius: 4px;
  @media (min-width: 576px) {
    flex-wrap: nowrap;
    align-items: center;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  word-break: break-word;
`;
export const IconContainer = styled.div`
  display: flex;
  font-size: 0.5rem;
  width: 100%;
  border: 4px double #262323;
  box-shadow: inset -1px 0px 5px #262323;
  @media (min-width: 576px) {
    justify-content: center;
    box-sizing: border-box;
    flex-flow: row wrap;
    font-size: 1vmax;
    width: 14vmax;
    min-width: 14vmax;
    height: 14vmax;
    min-height: 14vmax;
  }
  @media (min-width: 1024px) {
    font-size: 0.9vmin;
    width: 14vmin;
    min-width: 14vmin;
    height: 14vmin;
    min-height: 14vmin;
  }
`;
export const Icon = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  box-sizing: border-box;
  overflow: hidden;
  & .not-allowed {
    white-space: nowrap;
    cursor: not-allowed;
    font-size: 0.95em;
    display: contents;
    @media (min-width: 576px) and (max-width: 1024px) {
      letter-spacing: -0.05em;
    }
  }
`;
export const Link = styled.a`
  text-decoration: none;
  color: black;
  &:visited,
  :hover,
  :active {
    color: black;
  }
`;
