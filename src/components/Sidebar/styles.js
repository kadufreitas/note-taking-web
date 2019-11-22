import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  height: 100%;
  width: 165px;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  h3 {
    padding: 20px;
    display: flex;
    align-items: center;
  }
`;

export const MenuSidebar = styled.ul`
  list-style: none;
`;

function setColor(props) {
  return props.activate
    ? {
        primary: '#F6FCFF',
        secondary: '#32B3FC',
      }
    : {
        primary: 'white',
        secondary: 'inherent',
      };
}

export const ItemMenu = styled.li`
  background-color: ${props => setColor(props).primary};
  color: ${props => setColor(props).secondary};
  border-left: 4px solid ${props => setColor(props).secondary};
  padding: 25px 0px;
  padding-left: 20px;
`;
