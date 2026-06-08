import { useParams, useOutletContext } from "react-router-dom";

function MovieCard() {
  const { movieId } = useParams();
  const { director } = useOutletContext();

  if (!director) return <h2>Director not found</h2>

  const movie = director.movies[movieId];

  if (!movie) return <h2>Movie not found</h2>


  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
    </div>
  );
}

export default MovieCard;