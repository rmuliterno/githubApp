import React from 'react';
import { Link } from 'react-router-dom';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {
  Container, CardLeft, Description, CardRight,
} from './styles';

function RepoList({ repo }) {
  return (
    <Container>
      <CardLeft>
        <Description>
          <p>{repo.name}</p>
          <span>{repo.description}</span>
        </Description>
      </CardLeft>
      <CardRight>
        <Link to={`/repo/${repo.full_name}`}>
          <ChevronRightIcon />
        </Link>
      </CardRight>
    </Container>
  );
}

export default RepoList;
