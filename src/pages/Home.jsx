import NavBar from "../components/NavBar"

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h1>🎬 Welcome to the Movie Directory 🎥</h1>
        <p>
          Explore a collection of famous directors and their iconic movies. Click
          below to start exploring!
        </p>
        <nav>
          {/* add links for directors page and about page */}
          <Link to="/directors">View Directors</Link> {' | '}
          <Link to="/about">Learn More About This App</Link>
        </nav>
      </main>
    </>
  )
}

export default Home
