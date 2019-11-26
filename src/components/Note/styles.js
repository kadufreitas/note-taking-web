import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  margin: 16px 20px;
  padding: 20px;
  border-radius: 0.5rem;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  h5 {
    padding-bottom: 5px;
    font-weight: bold;
  }
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* -40px para descontar o padding do elemento pai */
    width: calc(100% - 40px);
    position: absolute;
  }
`;

export const TagsList = styled.div`
  margin-top: 50px;
`;
