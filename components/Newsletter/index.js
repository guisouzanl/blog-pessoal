/* eslint-disable react/button-has-type */
import React from 'react';
import { Container } from './styles';

const Newsletter = () => (
  <Container>
    <h1>Assine nossa newsletter!</h1>
    <p>Receba nossos melhores conteúdos!</p>
    <input type="email" name="" id="" placeholder="Digite aqui seu email" />
    <button> Inscrever-se</button>
  </Container>
);

export default Newsletter;
