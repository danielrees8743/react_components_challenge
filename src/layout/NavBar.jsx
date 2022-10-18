import './NavBar.css';
import Logout from '../components/LogoutButton';

const NavBar = ({ loggedCharacter, logout }) => {
  return (
    <nav>
      {loggedCharacter && (
        <>
          <div className="avatar">
            <img src={loggedCharacter.image} alt="character-logo" />
            <p>{loggedCharacter.name}</p>
          </div>
          <Logout logout={logout} />
        </>
      )}
    </nav>
  );
};

export default NavBar;
