import './CardContainer.css';
import Card from '../components/Card';
import Image from '../components/Image';

const CardContainer = ({
  loggedCharacter,
  characters,
  allCharacters,
  addCharacter,
  login,
}) => {
  return (
    <div id="main">
      {!loggedCharacter ? (
        <>
          <h1>Choose Your Main Character</h1>
          <section id="character-container">
            {characters.slice(0, 5).map((character) => (
              <div className="card card-login" key={character.id}>
                <Image image={character} />
                <div className="card-container" key={character.id}>
                  <h2>{character.name}</h2>
                </div>
                <div className="button-container">
                  <button
                    className="choose-button"
                    onClick={() => login(character.id)}
                  >
                    Choose
                  </button>
                </div>
              </div>
            ))}
          </section>
        </>
      ) : (
        <section id="character-container">
          {allCharacters.map((character) => (
            <Card
              character={character}
              addCharacter={addCharacter}
              key={character.id}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default CardContainer;
