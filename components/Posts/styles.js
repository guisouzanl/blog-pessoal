import styled from 'styled-components';
import { FaArrowDown } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;

  @media screen and (max-width: 1366px) {
    margin: 0px 10px 0 10px;
    flex-direction: column;
  }
`;

export const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  max-width: 75%;

  @media screen and (max-width: 1366px) {
    margin: 30px 0px 0 10px;
    max-width: 100%;
    order: 2;
  }
`;

export const PostItem = styled.li`
  height: 300px;
  border-bottom: 1px #e8e5e5 solid;
  padding: 30px 0 30px 0;

  @media screen and (max-width: 1366px) {
    height: auto;
  }

  &:first-child {
    margin-top: 50px;
  }
`;

export const PostArticle = styled.article`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-wrap: wrap;
`;

export const PostImageContainer = styled.div`
  max-width: 25%;
  height: 100%;
  display: flex;
  align-items: center;

  img {
    max-height: 50%;
    border-radius: 2px;

    @media screen and (max-width: 1366px) {
      height: 100%;
      width: 100%;
    }
  }

  @media screen and (max-width: 1366px) {
    max-width: 100%;
  }
`;

export const PostItemText = styled.div`
  max-width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 0 30px;

  @media screen and (max-width: 1366px) {
    margin: 30px 0 0 0;
    height: 50%;
    max-width: 100%;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;

    @media screen and (max-width: 1366px) {
      -webkit-line-clamp: 3;
    }
  }
`;

export const ArrowDown = styled(FaArrowDown)`
  height: 18px;
  width: 18px;
  color: black;
  position: absolute;
  right: 30%;
  margin: 20px 0 0 0;
  cursor: pointer;

  @media screen and (max-width: 1366px) {
    margin: 0;
    right: 10%;
  }
`;
