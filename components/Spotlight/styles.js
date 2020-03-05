import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  @media screen and (max-width: 1366px) {
    padding: 30px 10%;
  }
`;

export const ArticlePanel = styled.div`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-height: calc(90vh - 160px - 85px);
  padding: 0 12% 10vh 50%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;

  @media screen and (max-width: 1366px) {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    padding: 20px 0 20px 0;
  }
`;

export const ArticleText = styled.article`
  width: 100%;

  h1 {
    font-size: 40px;
    margin: 0 0 40px 0;

    @media screen and (max-width: 1366px) {
      margin: 0 0 20px 0;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    margin: 0 0 40px 0;

    @media screen and (max-width: 1366px) {
      margin: 0 0 20px 0;
    }
  }
`;

export const PanelImage = styled.div`
  z-index: -3;

  a {
    background-image: url('../../images/posts/post2.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 85px;
    z-index: 10;
    overflow: hidden;
    width: calc(50% - 130px);
    transition: all 0.4s ease 0s;
    border-radius: 10px;

    &:hover {
      opacity: 0.5;
    }

    @media screen and (max-width: 1366px) {
      width: 100%;
      left: 0;
      opacity: 0.3;
      z-index: -3;
    }
  }
`;
