import './Card.css';
import Image from './Image';

const Card = ({ character, addCharacter }) => {
  return (
    <div className="card">
      <Image image={character} />

      <div className="card-container">
        <h2>{character.name}</h2>
        <p>
          <span>Sex:</span> {character.gender}
        </p>
        <p>
          <span>Status:</span> {character.status}
        </p>
        <p>
          <span>Species:</span> {character.species}
        </p>
      </div>
      <div className="button-container">
        <button
          className="choose-button"
          onClick={() => addCharacter(character.id)}
        >
          Choose
        </button>
      </div>
    </div>
  );
};

export default Card;
