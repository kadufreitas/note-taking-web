import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const Card = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  width: 18rem;
  background-color: white;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  padding: 60px 40px;
  input {
    background-color: rgba(196, 196, 196, 0.3);
    color: rgba(0, 0, 0, 0.34);
    width: 100%;
    text-align: left;
    padding: 6px 21px;
    border-radius: 0.5rem;
    border: none;
    margin-top: 16px;
  }
  button {
    background-color: #32b3fc;
    color: white;
    padding: 5px 40px;
    border: none;
    width: 100%;
    border-radius: 0.5rem;
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  flex-flow: wrap;
`;

export const ToggleButton = styled.div`
  color: #32b3fc;
  cursor: pointer;
  margin-top: 20px;
`;
