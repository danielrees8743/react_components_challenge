import './Avatar.css';
import Image from './Image';

const Avatar = ({ character }) => {
  return (
    <div className="avatar" key={character.id}>
      <Image image={character} />
      {/* <img src={character.image} alt="characters " /> */}
      <p>{character.name}</p>
    </div>
  );
};

export default Avatar;
