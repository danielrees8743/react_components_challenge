import './NavBar.css';

const NavBar = ({ loggedCharacter, logout }) => {
  return (
    <nav>
      {loggedCharacter && (
        <>
          <div className="avatar">
            <img src={loggedCharacter.image} />
            <p>{loggedCharacter.name}</p>
          </div>
          <button className="logout" onClick={logout}>
            Logout
          </button>
        </>
      )}
    </nav>
  );
};

export default NavBar;
