import styled from 'styled-components';
import { Button as MaterialButton, TextField } from '@material-ui/core';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  margin: 48px 0;

  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const Field = styled(TextField)`
  margin-bottom: 16px;
`;

export const Button = styled(MaterialButton)`
`;
