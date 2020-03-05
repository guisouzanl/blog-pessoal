import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PostPanel = styled.div`
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

export const PostBody = styled.div`
  padding: 50px 0 0 0;

  img {
    width: 100%;
  }
`;

export const PostText = styled.div`
  text-align: center;
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

  small {
    font-size: 18px;
  }
`;
