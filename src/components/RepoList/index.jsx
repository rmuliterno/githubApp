import React from 'react';

import {
  Container, CardLeft, Image, Description, RepoImage, CardRight,
} from './styles';

function RepoList() {
  return (
    <Container>
      <CardLeft>
        <Image>
          <RepoImage alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Image>
        <Description>
          <p>GithubApp</p>
          <span>Um app para visualizar repos do github</span>
        </Description>
      </CardLeft>
      <CardRight>
        <span>Ir lá!</span>
      </CardRight>
    </Container>
  );
}

export default RepoList;
