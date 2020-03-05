import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const Container = styled.aside`
  max-width: 18%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 0 0;

  @media screen and (max-width: 1366px) {
    max-width: 100%;
    order: 1;
  }
`;

export const SearchMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 0 50px 0;

  span {
    width: 50px;
    height: 50px;
    background-color: yellow;
  }

  input {
    font-size: 20px;
    font-weight: 500;
    width: 80%;
    height: 20px;
    padding: 6px 9px;
    text-align: center;
    background: transparent;
    border: none;
    border-radius: 0;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom: 2px solid grey;
  }
`;

export const SearchIcon = styled(FaSearch)`
  height: 18px;
  width: 18px;
  color: black;
  margin: 0 0 0 15px;
  cursor: pointer;
`;

export const Filter = styled.div`
  width: 100%;

  h1 {
    margin: 0 0 15px 0;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      margin: 0 0 10px 0;

      button {
        border: 0;
        width: 100px;
        padding: 0px;
        border-radius: 10px;
        height: 28px;
        font-size: 11px;
        font-weight: 700;
        color: white;
        background-color: #8fd3fe;
        text-align: center;
      }
    }
  }
`;
