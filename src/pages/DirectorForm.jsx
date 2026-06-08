import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function DirectorForm() {
  const { addDirector } = useOutletContext();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDirector = {
      name,
      movies: []
    };
    addDirector(newDirector);
  };

  return (
    <div>
      <h2>Add New Director</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Director Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Director</button>
      </form>
    </div>
  );
}

export default DirectorForm;