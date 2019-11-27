import styled from 'styled-components';

export const Container = styled.li`
  background-color: ${props => props.color};
  width: auto;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0px 12px;
  font-size: 14px;
  list-style: none;
  border-radius: 20px;
  .tag-close-icon {
    display: block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 14px;
    margin-left: 8px;
    color: #0052cc;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
`;
