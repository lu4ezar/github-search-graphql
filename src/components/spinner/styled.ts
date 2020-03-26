import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  grid-area: list;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background: grey !important;
  z-index: 100;
  opacity: 0.7;
  pointer-events: none;
  &.enter {
    opacity: 0;
    transition: opacity 300ms linear;
  }
  &.enter-active {
    opacity: 0.8;
    transition: opacity 300ms linear;
  }
  &.exit {
    opacity: 0.8;
    transition: opacity 300ms linear;
  }
  &.exit-active {
    opacity: 0;
    transition: opacity 300ms linear;
  }
`;

export default Wrapper;
