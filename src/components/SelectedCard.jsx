import './SelectedCard.css';
import Avatar from './Avatar';
const SelectedCard = ({ character, removeCharacter }) => {
  return (
    <div className="chosen-card" key={character.id}>
      <Avatar character={character} />
      {/* <div className="avatar">
        <img src={character.image} alt="characters " />
        <p>{character.name}</p>
      </div> */}
      <button
        className="remove-button"
        onClick={() => removeCharacter(character.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default SelectedCard;
