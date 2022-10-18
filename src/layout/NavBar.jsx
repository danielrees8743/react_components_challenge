import './NavBar.css';
import Logout from '../components/LogoutButton';
import Avatar from '../components/Avatar';

const NavBar = ({ loggedCharacter, logout }) => {
  return (
    <nav>
      {loggedCharacter && (
        <>
          <Avatar character={loggedCharacter} />
          <Logout logout={logout} />
        </>
      )}
    </nav>
  );
};

export default NavBar;
