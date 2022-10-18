import './logoutButton.css';
const Logout = ({ logout }) => {
  return (
    <button className="logout" onClick={logout}>
      Logout
    </button>
  );
};

export default Logout;
