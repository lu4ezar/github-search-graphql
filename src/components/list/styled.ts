import styled from "styled-components";
import Loader from "react-loader-spinner";

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
export const CenteredLoader = styled(Loader)`
  margin: auto;
`;