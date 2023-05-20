import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './../../context/UserContext';
import { AppTitle, HeaderContainer, ProfileName, ProfilePicture, SignOutButton } from './styles';
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '../../config/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { userName, profilePicture, setToken, setUserName, setProfilePicture } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClickSignOutButton = () => {
    const auth = getAuth(firebaseApp);

    auth.signOut().then(() => {
      setToken('');
      setUserName('');
      setProfilePicture('');

      navigate('/');
    });
  }

  return (
    <HeaderContainer>
      <AppTitle>GitHuberson</AppTitle>
      
      <ProfilePicture
        src={profilePicture}
        alt={`Foto de ${userName}`} />

      <ProfileName>{userName}</ProfileName>

      <SignOutButton onClick={handleClickSignOutButton}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </SignOutButton>
    </HeaderContainer>
  );
}

export default Header;