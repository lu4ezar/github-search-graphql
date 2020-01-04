import styled from "styled-components";

export const RecentDiv = styled.div`
  grid-area: aside_recent;
  display: flex;
  flex-direction: column;
`;
export const Panel = styled.div`
  display: flex;
`;
export const Button = styled.button`
  background-color: transparent;
  color: #262323;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    cursor: auto;
  }
`;
export const Arrow = styled.span`
  position: relative;
  right: -2rem;
  &.invisible {
    visibility: collapse;
  }
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
