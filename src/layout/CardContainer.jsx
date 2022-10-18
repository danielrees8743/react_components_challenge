import './CardContainer.css';

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
              <div className="card card-login">
                <img src={character.image} alt="character" />
                <div className="card-container">
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
            <div className="card">
              <img src={character.image} alt="character" />
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
          ))}
        </section>
      )}
    </div>
  );
};

export default CardContainer;
