import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  margin-top: 16px;
  flex: 1;
  padding: 30px;
  border-top-left-radius: 0.5rem;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  /* - 16px para descontar o margin-top usado */
  height: calc(100% - 16px);
`;
