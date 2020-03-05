/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import Link from 'next/link';
import postContext from '../contexts/postContext';
import filterContext from '../contexts/filterContext';
import {
  BigNotice,
  SmallNotices,
  Container,
  SmallNoticesList,
  SmallNoticesListItem,
  BigNoticeText,
} from './styles';

const Notices = () => {
  const { lastPosts, lastPost } = useContext(postContext);
  const { setSinglePost } = useContext(filterContext);
  return (
    <Container>
      <BigNotice>
        <article>
          <img src="../../images/posts/post9.png" alt="Post gigante" />
          <BigNoticeText>
            <h2>
              <Link href="/notice">
                <a
                  role="button"
                  tabIndex={0}
                  onClick={() => setSinglePost(lastPost)}
                >
                  {lastPost.title}
                </a>
              </Link>
            </h2>
            <p>{lastPost.body}</p>
            <small>
              Escrito por: <b>{lastPost.name}</b>
            </small>
          </BigNoticeText>
        </article>
      </BigNotice>
      <SmallNotices>
        <h1>Últimas notícias</h1>
        <SmallNoticesList>
          {lastPosts.map(post => (
            <SmallNoticesListItem>
              <article>
                <img src="../../images/posts/post4.png" alt="imgPost" />
                <p>
                  <Link href="/notice">
                    <a
                      role="button"
                      tabIndex={0}
                      onClick={() => setSinglePost(post)}
                    >
                      {post.body}
                    </a>
                  </Link>
                </p>
              </article>
            </SmallNoticesListItem>
          ))}
        </SmallNoticesList>
      </SmallNotices>
    </Container>
  );
};

export default Notices;
