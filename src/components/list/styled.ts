import styled from "styled-components";

export const ListDiv = styled.div`
  grid-area: list;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 1em;
  &.filled {
    box-shadow: inset 0px 0px 31px #262323;
    border-radius: 12px;
  }
`;
export const SpinnerWrapper = styled.div`
  display: flex;
  align-self: center;
  margin: auto;
`;
export const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
`;
