import "./CharacterDetails.scss";
import { useQueries } from "@tanstack/react-query";
import { getMovies } from "../../api/api";

const CharacterDetails = ({ toggleModal, moviesId }: any) => {
  const queryResult = useQueries({
    queries: moviesId.map((movieId: any) => ({
      queryKey: ["movieKey", movieId],
      queryFn: async () => getMovies(movieId),
    })),
  }).map((result) => result.data);

  console.log("queryResultData", queryResult);

  return (
    <div className="cart-details">
      <>
        <div className="cart-details__header">
          <h3>Movies</h3>
          <button onClick={toggleModal}>X</button>
        </div>
        <div className="cart-details__text">
          {queryResult.map((result: any) => (
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
      </>
    </div>
  );
};

export default CharacterDetails;
