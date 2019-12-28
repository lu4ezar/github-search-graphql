import styled from "styled-components";

export const FooterDiv = styled.div`
  grid-area: footer;
  text-transform: uppercase;
  font-weight: bold;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vmax;
`;
export const TextLink = styled.div`
  flex: 1 0 auto;
  display: none;
  @media (min-width: 576px) {
    display: flex;
  }
`;
