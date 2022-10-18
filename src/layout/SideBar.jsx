import './SideBar.css';
import SelectedCard from '../components/SelectedCard';

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
                  <SelectedCard
                    character={character}
                    removeCharacter={removeCharacter}
                  />
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
