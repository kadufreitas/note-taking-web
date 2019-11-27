import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Input = styled.input`
  background-color: rgba(196, 196, 196, 0.3);
  color: rgba(0, 0, 0, 0.34);
  text-align: left;
  padding: 6px 21px;
  border-radius: 0.5rem;
  /* min-width: 380px; */
  border: none;
  margin-left: 5px;
`;

export const ColorsList = styled.div`
  display: flex;
`;

export const Option = styled.div`
  border-radius: 50%;
  width: 28px;
  height: 28px;
  background-color: ${props => props.color};
  margin: 0 5px;
  border: ${props => props.isSelected && '2px solid #333'};
`;
