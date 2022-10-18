import { useState } from 'react';
import './App.css';
import characters from './data/characters.json';
import Footer from './layout/Footer';
import SideBar from './layout/SideBar';
import NavBar from './layout/NavBar';
import CardContainer from './layout/CardContainer';

const App = () => {
  const [loggedCharacter, setLoggedCharacter] = useState(null);
  const [allCharacters, setAllCharacters] = useState([...characters]);
  const [chosen, setChosen] = useState([]);

  const login = (id) => {
    setAllCharacters([
      ...characters.filter((character) => character.id !== id),
    ]);
    setLoggedCharacter(characters.find((c) => c.id === id));
    setChosen([]);
  };

  const logout = () => {
    setAllCharacters([...characters]);
    setLoggedCharacter(null);
  };

  const addCharacter = (id) => {
    if (chosen.length === 5) {
      window.alert('Cannot choose more than 5');
      return;
    }

    setAllCharacters([
      ...characters
        .filter((character) => character.id !== id)
        .filter((character) => character.id !== loggedCharacter.id)
        .filter((character) => !chosen.includes(character.id)),
    ]);
    setChosen([...chosen, id]);
  };

  const removeCharacter = (id) => {
    const filteredChosen = chosen.filter((chosenId) => chosenId !== id);

    setChosen(filteredChosen);

    setAllCharacters([
      ...characters
        .filter((character) => character.id !== loggedCharacter.id)
        .filter((character) => !filteredChosen.includes(character.id)),
    ]);
  };

  return (
    <div className="App">
      <NavBar loggedCharacter={loggedCharacter} logout={logout} />
      <CardContainer
        loggedCharacter={loggedCharacter}
        characters={characters}
        allCharacters={allCharacters}
        addCharacter={addCharacter}
        login={login}
      />
      <SideBar
        loggedCharacter={loggedCharacter}
        chosen={chosen}
        characters={characters}
        removeCharacter={removeCharacter}
      />
      <Footer />
    </div>
  );
};

export default App;
