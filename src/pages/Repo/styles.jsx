import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

export const TopInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
`;

export const Description = styled.div``;

export const Name = styled.p`
  font-size: 36px;
  color: #333;
`;

export const RepoDescription = styled.span`
  font-size: 22px;
  color: #777;
`;

export const BottomInfo = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IssuesInfo = styled.span`
  font-size: 18px;
  color: #777;
`;

export const Access = styled.a`
  text-decoration: none;
  color: #1976d2;
  transition: color 0.4s;

  &:hover {
    color: #094c8e;
  }
`;

export const Issues = styled.div`
  margin-top: 48px;
`;
