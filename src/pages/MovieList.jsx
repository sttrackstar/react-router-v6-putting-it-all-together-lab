import { useOutletContext, Link, useParams } from "react-router-dom";

const MovieList = () => {
    const outlet = useOutletContext();
    const directors = outlet?.directors ?? [];
    const { directorId } = useParams();

    const director = directors.find((d) => String(d.id) === String(directorId)) || null;

    if (!director) {
        return <h2>Director not found.</h2>
    }

    if(!director.movies || director.movies.length === 0) {
        return (
            <div>
                <p>No movies available found for {director.name}</p>
                <Link to={`movies/new`}>Add the first movie</Link>
            </div>
        );
    }
        return (
            <div>
                <h3>{director.name}'s Movies:</h3>
                <ul>
                    {director.movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                    ))}
                </ul>
                <Link to={`movies/new`}>Add New Movie</Link>
            </div>
        );
}

export default MovieList;