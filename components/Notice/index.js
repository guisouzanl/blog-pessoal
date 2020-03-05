import React, { useContext } from 'react';
import {
  Container,
  PostPanel,
  PanelImage,
  PostText,
  PostBody,
  PanelText,
} from './styles';

import FormatedBody from '../styles/styles';

import filterContext from '../contexts/filterContext';

const SingleNotice = () => {
  const { singlePost } = useContext(filterContext);

  return (
    <Container>
      <PostPanel>
        <PanelImage />
        <PanelText>
          <h1>{singlePost.title}</h1>
        </PanelText>
      </PostPanel>
      <FormatedBody>
        <PostBody>
          <img src="../../images/posts/post2.png" alt="Post" />
          <PostText>
            <h2>{singlePost.title}</h2>
            <p>{singlePost.body}</p>
            <small>
              Escrito por: <b>{singlePost.name}</b>
            </small>
          </PostText>
        </PostBody>
      </FormatedBody>
    </Container>
  );
};

export default SingleNotice;
