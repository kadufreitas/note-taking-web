import styled from 'styled-components';

export const Container = styled.ul`
  background-color: white;
  height: 40px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 2;
  position: absolute;
  bottom: 20px;
  /* -60px para descontar o padding do elemento pai */
  width: calc(100% - 60px);
  button {
    display: flex;
  }
  .select-search-box {
    width: 300px;
    position: relative;
    background: #fff;
    border-radius: 0.5rem;
  }

  .select-search-box--multiple {
    border-radius: 0.5rem;
    box-shadow: 0 7px 14px 0 rgba(50, 50, 93, 0.1),
      0 3px 6px 0 rgba(0, 0, 0, 0.07);
    overflow: hidden;
  }

  .select-search-box::after {
    content: '^';
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    text-align: center;
    line-height: 50px;
    color: #222f3e;
    z-index: 1;
  }

  .select-search-box--multiple::after {
    content: '\f002';
  }

  .select-search-box--input::after {
    display: none !important;
  }

  .select-search-box__out {
    display: none;
  }

  .select-search-box__search {
    display: block;
    border-radius: 0.5rem;
    width: 100%;
    height: 50px;
    border: none;
    background: none;
    outline: none;
    font-size: 16px;
    padding: 0 20px;
    color: #222f3e;
    -webkit-appearance: none;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
    cursor: pointer;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 50px;
    box-shadow: 0 7px 14px 0 rgba(50, 50, 93, 0.1),
      0 3px 6px 0 rgba(0, 0, 0, 0.07);
  }

  input.select-search-box__search {
    line-height: 1;
  }

  .select-search-box--multiple .select-search-box__search {
    box-shadow: none;
  }

  .select-search-box--input .select-search-box__search {
    cursor: text;
  }

  .select-search-box__search:focus {
    cursor: text;
  }

  .select-search-box__search--placeholder {
    font-style: italic;
    font-weight: normal;
  }

  .select-search-box input::-webkit-input-placeholder {
    color: #ccc;
    font-style: italic;
    font-weight: normal;
  }

  .select-search-box input::-moz-placeholder {
    color: #ccc;
    font-style: italic;
    font-weight: normal;
  }

  .select-search-box input:-moz-placeholder {
    color: #ccc;
    font-style: italic;
    font-weight: normal;
  }

  .select-search-box input:-ms-input-placeholder {
    color: #ccc;
    font-style: italic;
    font-weight: normal;
  }

  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  .select-search-box__select {
    display: none;
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 0.5rem;
    overflow: auto;
    box-shadow: 0 7px 14px 0 rgba(50, 50, 93, 0.1),
      0 3px 6px 0 rgba(0, 0, 0, 0.07);
    z-index: 100;
    min-height: 49px;
  }

  .select-search-box--multiple .select-search-box__select {
    display: block;
    position: static;
    border-top: 1px solid #eee;
    border-radius: 0;
    box-shadow: none;
  }

  .select-search-box__select--display {
    display: block;
  }

  .select-search-box__option {
    font-size: 16px;
    font-weight: 400;
    color: #616b74;
    padding: 15px 20px;
    border-top: 1px solid #eee;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;
  }

  .select-search-box__option:first-child {
    border-top: none;
  }

  .select-search-box__option--hover,
  .select-search-box__option:hover {
    background: #f4f7fa;
  }

  .select-search-box__option--selected {
    background: #54a0ff;
    color: #fff;
    border-top-color: #2184ff;
  }

  .select-search-box__option--selected:hover,
  .select-search-box__option--selected.select-search-box__option--hover {
    background: #2184ff;
    color: #fff;
    border-top-color: #2184ff;
  }

  .select-search-box__group {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #eee;
    position: relative;
  }

  .select-search-box__group-header {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 0 10px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
  }
`;

export const OptionButton = styled.button`
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
`;

export const TagsList = styled.div`
  justify-self: flex-start;
  flex: 1;
  display: flex;
  align-items: center;
  .tag {
    margin-right: 10px;
  }
`;
