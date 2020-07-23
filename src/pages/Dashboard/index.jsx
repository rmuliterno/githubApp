import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Content, Form, Field, Button,
} from './styles';
import RepoList from '../../components/RepoList';

const useStyles = makeStyles(() => ({
  button: {
    marginTop: '8px',
  },
}));

function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <h1>Search a Github user</h1>

      <Content>
        <Form>
          <Field label="User" variant="filled" />
          <Button variant="contained" color="primary" className={classes.button}>Procurar</Button>
        </Form>

        <RepoList />
      </Content>
    </>
  );
}

export default Dashboard;
