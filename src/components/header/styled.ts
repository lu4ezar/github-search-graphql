import styled from "styled-components";

const HeaderDiv = styled.div`
  grid-area: header;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

export default HeaderDiv;
