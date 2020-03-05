import React, { useContext, useState } from 'react';
import Link from 'next/link';
import {
  Container,
  PostList,
  PostItem,
  PostItemText,
  PostArticle,
  PostImageContainer,
  ArrowDown,
} from './styles';
import postContext from '../contexts/postContext';
import filterContext from '../contexts/filterContext';
import AsideMenu from '../AsideMenu/index';

const Posts = () => {
  const { allPosts } = useContext(postContext);
  const { filter, setSinglePost } = useContext(filterContext);

  const [posts, setPost] = useState(allPosts);

  const handleClick = () => {
    const sortedByDate = allPosts.sort(
      (a, b) => b.metadata.publishedAt - a.metadata.publishedAt
    );

    setPost([...sortedByDate]);
  };

  return (
    <Container>
      <PostList>
        <ArrowDown onClick={handleClick} />
        {filter === ''
          ? posts.map(post => (
              <PostItem key={post.title}>
                <PostArticle>
                  <PostImageContainer>
                    <img src="../../images/posts/post7.png" alt="Post 2" />
                  </PostImageContainer>
                  <PostItemText>
                    <h2>
                      <Link href="/notice">
                        <a
                          role="button"
                          tabIndex={0}
                          onClick={() => setSinglePost(post)}
                        >
                          {post.title}
                        </a>
                      </Link>
                    </h2>
                    <p>{post.body}</p>
                    <small>
                      Escrito por: <b>{post.name}</b>
                    </small>
                  </PostItemText>
                </PostArticle>
              </PostItem>
            ))
          : posts
              .filter(
                obj =>
                  obj.name.includes(filter) ||
                  obj.title.includes(filter) ||
                  obj.body.includes(filter)
              )
              .map(post => (
                <PostItem key={post.title}>
                  <PostArticle>
                    <PostImageContainer>
                      <img src="../../images/posts/post7.png" alt="Post 2" />
                    </PostImageContainer>
                    <PostItemText>
                      <h2>
                        <Link href="/notice">
                          <a
                            role="button"
                            tabIndex={0}
                            onClick={() => setSinglePost(post)}
                          >
                            {post.title}
                          </a>
                        </Link>
                      </h2>
                      <p>{post.body}</p>
                      <small>
                        Escrito por: <b>{post.name}</b>
                      </small>
                    </PostItemText>
                  </PostArticle>
                </PostItem>
              ))}
      </PostList>
      <AsideMenu />
    </Container>
  );
};

export default Posts;
