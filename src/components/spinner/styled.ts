import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  position: sticky;
  bottom: 0;
  background: grey;
  z-index: 100;
  opacity: 0.7;
  border-radius: 12px;
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
