import styled from 'styled-components';
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  max-height: 100%;
  height: 200px;

  img {
    width: 30%;

    @media screen and (max-width: 1366px) {
      width: 30%;
    }
  }

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
`;

export const FooterMenu = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    padding: 0px 20px;
  }
`;

export const SocialMenu = styled.div`
  color: black;
`;

export const GitIcon = styled(FaGithubAlt)`
  height: 28px;
  width: 28px;
  margin-right: 20px;
`;
export const LinkedinIcon = styled(FaLinkedin)`
  height: 28px;
  width: 28px;
`;
