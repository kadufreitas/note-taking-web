import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  height: 40px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
  position: absolute;
  bottom: 20px;
  /* -60px para descontar o padding do elemento pai */
  width: calc(100% - 60px);
  button {
    margin-left: 20px;
  }
`;

export const OptionButton = styled.button`
  color: #32b3fc;
  font-size: 1.2rem;
  background-color: transparent;
  padding: 5px 20px;
  border: none;
  border-radius: 0.5rem;
  svg {
    margin-right: 5px;
    color: #32b3fc;
  }
  &:hover {
    background-color: #efefef;
  }
`;
