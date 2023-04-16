import CharacterSearch from "./components/CharacterSearch/CharacterSearch";
import Header from "./components/Header/Header";
import './App.scss';
import SearchResult from "./components/SearchResult/SearchResult";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <CharacterSearch />
      <SearchResult />
      <CharacterDetails />
    </div>
  );
}

export default App;



// color: #FFE300;