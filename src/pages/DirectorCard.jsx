import { Outlet, useOutletContext, Link, useParams } from "react-router-dom"

function DirectorCard() {
    const { directors, updateDirector } = useOutletContext()
    const { id } = useParams()

    const director = directors.find(m => m.id === id)

    if (!director) {
        return <h2>Director not found.</h2>
    }

    return (
        <div>
        <h2>{director.name}</h2>
        <p>{director.bio}</p>
        <h3>Movies:</h3>
        <ul>
            {director.movies.map((movie) => (
            <li key={movie.id}>
                <Link to={`movie/$movie.id`}>{movie.title}</Link>
            </li>
            ))}
        </ul>
        <Link to={`movies/new`}>Add New Movie</Link>
        <Outlet context={{directors, updateDirector}}/>
        </div>
    )
}

export default DirectorCard