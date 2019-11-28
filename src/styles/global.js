import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100%;
    background-color: #F6F6F6;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button{
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button{
    cursor: pointer;
  }

  div.DraftEditor-root {
    background-color: #fffef7;
    width:80%;
    margin:auto;
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.5);
    height:300px;
    overflow-y: scroll;
    padding:20px;
    font-size: 18px;
    font-family: 'calibri', sans-serif;
  }

  .default-button{
    color: #32b3fc;
    font-size: 1.2rem;
    background-color: transparent;
    padding: 10px 20px;
    border: none;
    border-radius: 0.5rem;
    svg {
      color: #32b3fc;
    }
    &:hover {
      background-color: #efefef;
    }
  }
  .default-button__small{
    font-size: 0.8rem;
    padding: 5px 10px;
  }
`;
