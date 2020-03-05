/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Container,
  AboutPanel,
  PanelImage,
  PanelText,
  AboutBody,
  AboutSocial,
  AboutText,
  GitIcon,
  LinkedinIcon,
} from './styles';

import FormatedBody from '../styles/styles';

const AboutMe = () => (
  <Container>
    <AboutPanel>
      <PanelImage />
      <PanelText>
        <h1>Sobre mim</h1>
      </PanelText>
    </AboutPanel>
    <FormatedBody>
      <AboutBody>
        <img src="../../images/profile2.jpg" alt="Me" />
        <AboutSocial>
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
        </AboutSocial>
        <AboutText>
          <h2>Guilherme Souza Alves</h2>
          <p>
            Desenvolvedor Web com experiência em React, React Native, NodeJS,
            restfull API’s, HTML, CSS, Javascript, relational e non-relational
            database. Atualmente estudo engenharia de software, buscando
            entender todo o processo de desenvolvimento de projetos,
            documentação e metodologias da programação por trás do resultado
            final. Treinado pelo bootcamp Omnistack com NodeJS, ReactJS and
            React native na Rocketseat.
          </p>
        </AboutText>
      </AboutBody>
    </FormatedBody>
  </Container>
);

export default AboutMe;
