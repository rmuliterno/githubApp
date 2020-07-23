import styled from 'styled-components';
import { Card, Avatar } from '@material-ui/core';
import { darken } from 'polished';

export const Container = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Image = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
`;

export const RepoImage = styled(Avatar)``;

export const Description = styled.div`
  p {
    font-size: 24px;
    color: #333;
  }

  span {
    font-size: 16px;
    color: #777;
  }
`;

export const CardRight = styled.div``;
