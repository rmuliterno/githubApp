import styled from 'styled-components';
import { Card, Avatar } from '@material-ui/core';

export const Container = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-bottom: 12px;
  min-height: 72px;
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

export const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;

  svg {
    color: #777;
    transition: color 0.4s;
  }

  &:hover {
    svg {
      color: #333;
    }
  }
`;
