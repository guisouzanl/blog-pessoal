import styled from 'styled-components';
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AboutPanel = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
`;

export const PanelImage = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../../images/posts/post6.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -3;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const PanelText = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  font-size: 35px;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
  }
`;

export const AboutBody = styled.div`
  padding: 50px 0 0 0;
  text-align: center;

  img {
    width: 300px;
    height: 300px;
    border-radius: 100%;
  }
`;

export const AboutSocial = styled.div`
  margin: 30px 0 0 0;
  text-align: center;
`;
export const AboutWorks = styled.div``;
export const AboutWorksList = styled.ul``;

export const AboutText = styled.div`
  height: 100%;
  margin: 60px 0 60px 0;

  h2 {
    font-size: 50px;
    margin: 0 0 40px 0;
  }

  p {
    font-size: 18px;
    margin: 0 0 30px 0;
  }
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
