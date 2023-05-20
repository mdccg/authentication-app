import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  background-color: #24252a;
  padding: 30px 20px;
  align-items: center;
`;

export const AppTitle = styled.h1`
  color: white;
  font-family: 'Lato';
  font-weight: 900;
  margin: 0;
`;

export const ProfilePicture = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0 20px 0 auto;
`;

export const ProfileName = styled.span`
  font-family: 'Lato';
  font-weight: 900;
  color: white;
  font-size: 18px;
`;

export const SignOutButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;

  padding: 10px;
  background-color: #323278;
`;