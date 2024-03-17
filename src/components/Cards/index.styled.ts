import styled from 'styled-components';

export const StyledCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 400px;
  background: var(--dark-color);
  border-radius: 10px;
  position: relative;
`;

export const StyledCardsFx = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  border-radius: 10px;
  position: absolute;

  &:hover {
    background-color: var(--main-color);
    cursor: pointer;
    opacity: 0.5;
  }
`;
