import { useState } from "react"
import { useParams, useOutletContext, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

function MovieForm() {
  const { id } = useParams()
  const [director] = useOutletContext()
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [genres, setGenres] = useState("")

  if (!director) return <h2>Director not found</h2>

  const handleSubmit = (e) => {
    e.preventDefault()

    const newMovie = {
      id: uuidv4(),
      title,
      time: parseInt(time),
      genres: genres.split(",").map((g) => g.trim()),
    }

    const updatedDirector = {
      ...director,
      movies: [...director.movies, newMovie],
    }

    fetch(`http://localhost:4000/directors/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedDirector),
    })
      .then((r) => r.json())
      .then(() => {
        navigate(`/directors/${id}/movies/${newMovie.id}`)
      })
  }

  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <input
          placeholder="Genres (comma-separated)"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          required
        />
        <button type="submit">Add New Movie</button>
      </form>
    </div>
  )
}

export default MovieForm