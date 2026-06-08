import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

function DirectorList() {
  const { directors } = useOutletContext();

  return (
    <div>
      <h1>Directors</h1>
      <Link to="/directors/new">Add New Director</Link>
      <ul>
        {directors.map(director => (
          <li key={director.id}>
            <Link to={`/directors/${director.id}`}>{director.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DirectorList;