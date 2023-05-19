import styled from 'styled-components';

export const LoginContainer = styled.div`
  padding: 50px 0;
  box-sizing: border-box;
  background-color: #f5f6fa;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const LoginButton = styled.button`
  border: none;
  border-radius: 50px;
  display: block;
  margin: auto;
  border-radius: 20px;
  /* https://shadows.brumm.af/ */
  box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
  background-color: var(--blue);
  
  flex-direction: row;
  align-items: center;
  display: flex;
  
  padding: 30px 40px;

  cursor: pointer;
  transition: all .125s;
  opacity: .9;
  user-select: none;
  
  &:hover {
    opacity: .8;
  }

  &:active {
    opacity: 1;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const ProviderLogo = styled.img`
  width: 64px;
  margin-right: 32px;
`;

export const SignInTextHitbox = styled.div`
  width: 256px;
  text-align: left;
`;

export const SignInText = styled.span`
  font-family: 'Lato';
  color: white;
  font-size: 125%;
  line-height: 1.5;
  font-weight: 900;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const InfoMessage = styled.h2`
  font-family: 'Lato';
  font-weight: 900;
  background-color: #4d05e8;
  color: white;
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  margin: 30px auto;
  text-align: center;
  
  position: absolute;
  top: 0;
  left: calc(50% - 200px);
`;

export const ErrorMessage = styled(InfoMessage)`
  background-color: #cf000f;
`;