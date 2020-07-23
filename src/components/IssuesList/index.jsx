import React from 'react';

import {
  Container, CardLeft, Description, CardRight, Label,
} from './styles';

function IssuesList({ issue }) {
  return (
    <Container>
      <CardLeft>
        <Description>
          <p>{issue.title}</p>
        </Description>
      </CardLeft>
      <CardRight>
        <Label
          label={issue.labels[0].name}
          color="primary"
        />
      </CardRight>
    </Container>
  );
}

export default IssuesList;
