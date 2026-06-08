import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h1>🎬 Welcome to the Movie Directory 🎥</h1>
        <p>Explore a collection of directors and their movies.</p>

        <nav>
          <Link to="/directors">View Directors</Link> |{" "}
          <Link to="/about">Learn More About This App</Link>
        </nav>
      </main>
    </>
  )
}

export default Home