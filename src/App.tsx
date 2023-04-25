import CharacterSearch from "./components/CharacterSearch/CharacterSearch";
import Header from "./components/Header/Header";
import "./App.scss";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";
import { useContext } from "react";
import Context from "./context/Context";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const { cartDetailsOpen } = useContext(Context);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <CharacterSearch />
      </div>
    </QueryClientProvider>
  );
}

export default App;
