import styled from "styled-components";

export const RecentDiv = styled.div`
  grid-area: aside_recent;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  padding: 0 1em;
`;
export const Panel = styled.div`
  display: flex;
  align-items: center;
`;
export const Heading = styled.div`
  text-align: center;
  width: 100%;
`;
export const Button = styled.button`
  background-color: transparent;
  color: #262323;
  cursor: pointer;
  border: none;
  outline: none;
  position: absolute;
  right: 2em;
  @media (min-width: 1024px) {
    display: none;
  }
`;
export const CollapsableListDiv = styled.div`
  overflow: hidden;
  max-height: 100%;
  transition: max-height 0.2s;
  &.collapsed {
    max-height: 0px;
    transition: max-height 0.2s;
    @media (min-width: 1024px) {
      max-height: 100%;
    }
  }
`;
export const HistoryItem = styled.div`
  text-transform: lowercase;
  font-style: italic;
  cursor: pointer;
  margin: 1rem;
  font-weight: normal;
  transition: background 0.4s;
  border-radius: 2px;
  padding: 0.2rem;
  text-align: center;
  &:hover {
    background: #e6e6e6;
  }
`;
