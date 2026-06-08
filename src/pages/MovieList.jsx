import { useOutletContext } from "react-router-dom"

function MovieList() {
  const [director] = useOutletContext()

  // Test suite expects this EXACT text
  if (!director) return <h2>Director not found</h2>

  return (
    <ul>
      {director.movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  )
}

export default MovieList