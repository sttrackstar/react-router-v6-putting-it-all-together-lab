import { useState } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"

function DirectorForm() {
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [directors, setDirectors] = useOutletContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newDirector = { name, bio, movies: [] }

    fetch("http://localhost:4000/directors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDirector),
    })
      .then((r) => r.json())
      .then((saved) => {
        setDirectors([...directors, saved])
        navigate(`/directors/${saved.id}`)
      })
  }

  return (
    <div>
      <h2>Add New Director</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Director's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Director's Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
        <button type="submit">Add Director</button>
      </form>
    </div>
  )
}

export default DirectorForm