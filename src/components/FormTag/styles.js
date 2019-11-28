import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  position: absolute;
  right: 0;
  width: 450px;
  background-color: white;
  height: 100vh;
  z-index: 9;
  padding: 50px 20px;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  h3 {
    margin-bottom: 20px;
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  color: #32b3fc;
  font-size: 17px;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 0.5rem;
  &:hover {
    background-color: #efefef;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  width: calc(100vw - 450px);
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  opacity: 1;
  z-index: 3;
  cursor: pointer;
`;

export const Form = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
`;
