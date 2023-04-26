import { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";
import "./CharacterSearch.scss";
import { useQuery } from "@tanstack/react-query";
import { getPersons } from "../../api/api";

const Search = () => {
  const [search, setSearch] = useState("");

  const { data, refetch, isFetching, isError } = useQuery(
    ["personKey", search],
    async () => getPersons(search),
    { enabled: false }
  );

  const handleSearch = () => {
    refetch();
  };

  return (
    <>
      <section className="search">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="search__input"
          type="search__input"
          placeholder="Search character"
        />
        <button onClick={handleSearch} disabled={isFetching}>
          {isFetching ? "Loading..." : "Search"}
        </button>
      </section>
      {isError && <h3>Something went wrong. Please try again.</h3>}
      {data?.results.length === 0 ? (
        <h3>No results</h3>
      ) : (
        data?.results.map((person) => (
          <SearchResult key={person.name} {...person} />
        ))
      )}
    </>
  );
};

export default Search;
