import './SideBar.css';

const SideBar = ({ loggedCharacter, chosen, characters, removeCharacter }) => {
  return (
    <aside>
      {loggedCharacter && (
        <section id="chosen-container">
          {chosen.length === 0 ? (
            <div>No Character was chosen</div>
          ) : (
            <>
              {chosen.map((id) => {
                const character = characters.find(
                  (character) => character.id === id
                );
                return (
                  <div className="chosen-card">
                    <div className="avatar">
                      <img src={character.image} />
                      <p>{character.name}</p>
                    </div>
                    <button
                      className="remove-button"
                      onClick={() => removeCharacter(character.id)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </>
          )}
        </section>
      )}
    </aside>
  );
};

export default SideBar;
