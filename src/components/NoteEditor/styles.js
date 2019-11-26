import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  position: relative;
  overflow-y: auto;
  margin-top: 16px;
  flex: 1;
  padding: 30px;
  border-top-left-radius: 0.5rem;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  /* - 16px para descontar o margin-top usado */
  height: calc(100% - 16px);
  div:nth-child(2) {
    height: calc(100% - 30px);
  }
`;

export const Input = styled.input`
  border: none;
  font-size: 24px;
  height: 30px;
  width: 100%;
`;
export const TextArea = styled.textarea`
  border: none;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  resize: none;
`;
