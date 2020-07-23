import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

import api from '../../services/api';
import IssuesList from '../../components/IssuesList';
import {
  Container,
  TopInfo,
  Image,
  Description,
  Name,
  RepoDescription,
  BottomInfo,
  IssuesInfo,
  Access,
  Issues,
} from './styles';

const useStyles = makeStyles(() => ({
  avatar: {
    height: '96px',
    width: '96px',
  },
}));

function Repo() {
  const [repo, setRepo] = useState({});
  const [issues, setIssues] = useState([]);
  const [avatar, setAvatar] = useState('');
  const [loading, setLoading] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    setLoading(true);
    async function fetchRepo() {
      const response = await api.get(`/repos/${name}`);
      setRepo(response.data);
      setAvatar(response.data.owner.avatar_url);
    }

    async function fetchIssues() {
      const response = await api.get(`/repos/${name}/issues?page=1&per_page=5`);
      setIssues(response.data);
    }
    fetchRepo();
    fetchIssues();
    setLoading(false);
  }, [name]);

  const classes = useStyles();
  return (
    <>
      <h1>Repo</h1>
      <Container>
        {loading ? (
          <BeatLoader
            color="#fff"
            margin={0}
            size={12}
          />
        ) : (
          <>
            <TopInfo>
              <Image>
                <Avatar className={classes.avatar} alt="Remy Sharp" src={avatar} />
              </Image>
              <Description>
                <Name>{repo.name}</Name>
                <RepoDescription>{repo.description}</RepoDescription>
              </Description>
            </TopInfo>
            <BottomInfo>
              <IssuesInfo>
                {repo.open_issues_count}
                {' '}
                Issues em aberto
              </IssuesInfo>
              <Access href={`https://github.com/${name}`} target="_blank">
                Acessar no github!
              </Access>
            </BottomInfo>

            <Issues>

              {issues.map((issue) => (
                <IssuesList key={issue.id} issue={issue} />
              ))}
            </Issues>
          </>
        )}
      </Container>
    </>
  );
}

export default Repo;
