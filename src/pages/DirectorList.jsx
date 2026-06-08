import { useOutletContext, Link } from "react-router-dom"

function DirectorList() {
  const [directors] = useOutletContext()

  return (
    <ul>
      {directors.map((d) => (
        <li key={d.id}>
          <Link to={d.id}>{d.name}</Link>
        </li>
      ))}
      <br />
      <Link to="new">➕ Add New Director</Link>
    </ul>
  )
}

export default DirectorList