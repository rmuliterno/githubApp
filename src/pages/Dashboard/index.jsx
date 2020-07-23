import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BeatLoader from 'react-spinners/BeatLoader';

import {
  Content, Form, Field, Button,
} from './styles';
import RepoList from '../../components/RepoList';

import api from '../../services/api';

const useStyles = makeStyles(() => ({
  button: {
    marginTop: '8px',
  },
}));

function Dashboard() {
  const [input, setInput] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const response = await api.get(`/users/${input}/repos?page=1&per_page=10`);
    setRepos(response.data);
    setLoading(false);
  }

  const classes = useStyles();
  return (
    <>
      <h1>Search a Github user</h1>

      <Content>
        <Form>
          <Field label="User" variant="filled" value={input} onChange={(e) => setInput(e.target.value)} />
          <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
            {loading ? (
              <BeatLoader
                color="#fff"
                margin={0}
                size={12}
              />
            ) : 'Search'}
          </Button>
        </Form>

        {repos.map((repo) => (
          <RepoList key={repo.id} repo={repo} />
        ))}
      </Content>
    </>
  );
}

export default Dashboard;
