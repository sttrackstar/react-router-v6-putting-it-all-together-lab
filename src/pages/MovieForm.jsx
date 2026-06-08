import React, { useState } from 'react';
import { useOutletContext, useNavigate, useParams } from 'react-router-dom';

function MovieForm() {
  const { director, addMovie } = useOutletContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, year: parseInt(year) };
    addMovie(newMovie);
    
    // Navigate to the new movie (it will be at the end of the array)
    const newMovieIndex = director.movies.length;
    navigate(`/directors/${id}/movies/${newMovieIndex}`);
  };

  return (
    <div>
      <h2>Add New Movie</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Movie Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default MovieForm;