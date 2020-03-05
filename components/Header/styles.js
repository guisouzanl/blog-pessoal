import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20%;

  li,
  a {
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    text-align: center;
  }

  @media screen and (max-width: 1366px) {
    flex-direction: column;
  }

  img {
    width: 30%;

    @media screen and (max-width: 1366px) {
      width: 40%;
    }
  }
`;

export const HeaderMenu = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    padding: 0px 20px;
  }
`;
