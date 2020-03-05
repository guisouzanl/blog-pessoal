/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Container, HeaderMenu } from './styles';

const Header = () => (
  <Container>
    <Link href="/">
      <a>
        <img src="/images/logo2.svg" alt="logo" />
      </a>
    </Link>
    <nav>
      <HeaderMenu>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/notices">
            <a>Noticias</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </HeaderMenu>
    </nav>
  </Container>
);

export default Header;
