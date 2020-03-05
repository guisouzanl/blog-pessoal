import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
  margin: 80px 0 0 0;
  text-align: center;

  h1 {
    margin: 0px 0 30px 0px;
  }

  p {
    margin: 0 0 20px 0;
  }

  input {
    margin: 0 0 20px 0;
    font-size: 20px;
    font-weight: 700;
    width: 50%;
    max-width: 500px;
    height: 35px;
    padding: 6px 9px;
    text-align: center;
    background: transparent;

    @media screen and (max-width: 1366px) {
      font-size: 12px;
    }

    border: none;
    border-radius: 0;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom: 2px solid grey;
  }

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
`;
