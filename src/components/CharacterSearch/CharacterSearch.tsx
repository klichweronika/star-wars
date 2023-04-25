import { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";
import "./CharacterSearch.scss";
import { useQuery } from "@tanstack/react-query";
import { getPersons } from "../../api/api";

const Search = () => {
  const [search, setSearch] = useState("");

  const { data, refetch } = useQuery(
    ["personKey", search],
    async () => getPersons(search),
    { enabled: false }
  );

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
        <button
          onClick={() => {
            refetch();
          }}
        >
          Search
        </button>
      </section>
      {data?.results.map((person) => (
        <SearchResult key={person.name} {...person} />
      ))}
    </>
  );
};

export default Search;
