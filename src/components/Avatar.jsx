import './Avatar.css';
const Avatar = ({ character }) => {
  return (
    <div className="avatar" key={character.id}>
      <img src={character.image} alt="characters " />
      <p>{character.name}</p>
    </div>
  );
};

export default Avatar;
