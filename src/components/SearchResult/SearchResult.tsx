import { useState } from "react";
import "./SearchResult.scss";
import { useQuery } from "@tanstack/react-query";
import { getPlanet } from "../../api/api";
import CharacterDetails from "../CharacterDetails/CharacterDetails";

const SearchResult = ({ name, homeworld }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const findUrlId = (url: string) => {
    const splittedUrl = url.split("/");
    return Number(splittedUrl[splittedUrl.length - 2]);
  };

  const homeWorldId = findUrlId(homeworld);

  const { data } = useQuery(["planetKey", homeWorldId], async () =>
    getPlanet(homeWorldId)
  );
  const moviesId = data?.films.map((film) => findUrlId(film));

  return (
    <div className="result-card" onClick={toggleModal}>
      <h2 className="result-card__name">{name}</h2>
      <div className="result-card__details">
        <span>Homeworld: {data?.name}</span>
        <span>Population:{data?.population}</span>
      </div>
      {isOpen && (
        <CharacterDetails toggleModal={toggleModal} moviesId={moviesId} />
      )}
    </div>
  );
};

export default SearchResult;
