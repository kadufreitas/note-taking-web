import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  height: 60px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;
  button {
    margin-left: 20px;
  }
`;

export const CreateButton = styled.button`
  background-color: #32b3fc;
  color: white;
  padding: 5px 40px;
  border: none;
  border-radius: 0.5rem;
  svg {
    margin-right: 5px;
  }
`;
