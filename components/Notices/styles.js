import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
  flex-wrap: wrap;

  border-bottom: 1px #e8e5e5 solid;
`;

export const BigNotice = styled.div`
  max-width: 65%;
  margin-bottom: 30px;
  img {
    width: 100%;
    margin: 0 0 15px 0;
    border-radius: 5px;
  }
  @media screen and (max-width: 1366px) {
    max-width: 100%;
  }
`;

export const BigNoticeText = styled.div`
  @media screen and (max-width: 1366px) {
    margin: 0 10px 0 10px;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    margin: 0 0 25px 0;
  }

  h2 {
    margin: 0 0 12px 0;
  }
`;

export const SmallNotices = styled.div`
  max-width: 32%;

  h1 {
    @media screen and (max-width: 1366px) {
      text-align: center;
    }
  }

  @media screen and (max-width: 1366px) {
    margin-top: 30px;
    max-width: 100%;
  }
`;

export const SmallNoticesList = styled.ul`
  list-style-type: none;
`;

export const SmallNoticesListItem = styled.li`
  margin: 0 0 30px 0;
  overflow: hidden;

  &:first-child {
    margin-top: 40px;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }

  article {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    margin: 0 0 0 10px;
  }
`;
