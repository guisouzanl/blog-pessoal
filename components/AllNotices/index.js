import React from 'react';
import { Container, NoticesPanel, PanelImage, PanelText } from './styles';

import FormatedBody from '../styles/styles';

import Posts from '../Posts/index';

const AllNotices = () => (
  <Container>
    <NoticesPanel>
      <PanelImage />
      <PanelText>
        <h1>Todas as notícias</h1>
      </PanelText>
    </NoticesPanel>
    <FormatedBody>
      <Posts />
    </FormatedBody>
  </Container>
);

export default AllNotices;
