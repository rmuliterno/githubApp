import React from 'react';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {
  Container, CardLeft, Image, Description, RepoImage, CardRight, Button,
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
        <Button>
          <ChevronRightIcon />
        </Button>
      </CardRight>
    </Container>
  );
}

export default RepoList;
