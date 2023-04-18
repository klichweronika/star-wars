import CharacterSearch from "./components/CharacterSearch/CharacterSearch";
import Header from "./components/Header/Header";
import './App.scss';
import SearchResult from "./components/SearchResult/SearchResult";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";
import { useContext } from "react";
import Context from "./context/Context";

function App() {

  

  const { cartDetailsOpen } = useContext(Context);

  return (
    <div className="App">
      <Header />
      <CharacterSearch />
      
      {cartDetailsOpen && <CharacterDetails />}
    </div>
  );
}

export default App;