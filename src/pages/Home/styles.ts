import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 32px;

  flex-direction: column;
  display: flex;
  flex: 1;
`;

export const WelcomeMessageGroup = styled.div`
  justify-content: center;
  flex-direction: column;
  display: flex;
  flex: 1;

  & > * {
    margin-bottom: 32px;
  }
`;

export const WelcomeMessage = styled.span`
  font-family: 'Lato';
  font-size: 125%;
  line-height: 1.5;
`;