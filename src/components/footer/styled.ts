import styled from "styled-components";
import { Link } from "../repo/styled";

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
export const SVGLink = styled(Link)`
  @media (max-width: 1023px) {
    margin: 0.3rem 0;
  }
`;
