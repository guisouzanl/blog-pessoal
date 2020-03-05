/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

import {
  Container,
  FooterMenu,
  SocialMenu,
  GitIcon,
  LinkedinIcon,
} from './styles';

const Footer = () => (
  <Container>
    <Link href="/">
      <a>
        <img src="/images/logo2.svg" alt="logo" />
      </a>
    </Link>
    <nav>
      <FooterMenu>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/notices">
            <a>Notícias</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </FooterMenu>
    </nav>
    <SocialMenu>
      <Link href="https://github.com/guisouzanl">
        <a>
          <GitIcon />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/guilherme-alves-0b5b4a14b/">
        <a>
          <LinkedinIcon />
        </a>
      </Link>
    </SocialMenu>
  </Container>
);

export default Footer;
