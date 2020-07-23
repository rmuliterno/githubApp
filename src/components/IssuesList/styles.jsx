import styled from 'styled-components';
import { Card, Chip } from '@material-ui/core';

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

export const Label = styled(Chip)``;
