/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import Link from 'next/link';
import postContext from '../contexts/postContext';
import filterContext from '../contexts/filterContext';
import { Container, ArticleText, ArticlePanel, PanelImage } from './styles';

const Spotlight = () => {
  const { spotLight } = useContext(postContext);
  const { setSinglePost } = useContext(filterContext);

  return (
    <Container>
      <PanelImage>
        <Link href="/notice">
          <a
            role="button"
            tabIndex={0}
            onClick={() => setSinglePost(spotLight)}
          />
        </Link>
      </PanelImage>

      <ArticlePanel>
        <ArticleText>
          <h1>
            <Link href="/notice">
              <a
                role="button"
                tabIndex={0}
                onClick={() => setSinglePost(spotLight)}
              >
                {spotLight.title}
              </a>
            </Link>
          </h1>
          <p>{spotLight.body}</p>
          <small>
            Escrito por: <b>{spotLight.name}</b>
          </small>
        </ArticleText>
      </ArticlePanel>
    </Container>
  );
};

export default Spotlight;
