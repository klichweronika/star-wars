import CharacterSearch from "./components/CharacterSearch/CharacterSearch";
import Header from "./components/Header/Header";
import "./App.scss";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <CharacterSearch />
      </div>
    </QueryClientProvider>
  );
};

export default App;
