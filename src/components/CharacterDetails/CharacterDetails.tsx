import "./CharacterDetails.scss";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../api/api";
import { MouseEventHandler } from "react";

type CharacterDetailsProps = {
  toggleModal: MouseEventHandler<HTMLButtonElement>;
  moviesId: number[];
};

const CharacterDetails = ({ toggleModal, moviesId }: CharacterDetailsProps) => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery(["movies", moviesId], async () => {
    const responses = await Promise.all(
      moviesId.map((movieId) => getMovies(movieId))
    );
    return responses;
  });

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Failed to fetch data.</h3>;
  }

  return (
    <div className="cart-details">
      <div className="cart-details__header">
        <h3>Movies</h3>
        <button onClick={toggleModal}>X</button>
      </div>
      <div className="cart-details__text">
        {movies.map((result) => (
          <>
            <strong>
              Title: <span>{result?.title}</span>
            </strong>
            <strong>
              Release date: <span>{result?.release_date}</span>
            </strong>
            <strong>
              Opening crawl:
              <span> {result?.opening_crawl.substring(0, 130)}...</span>
            </strong>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};

export default CharacterDetails;
