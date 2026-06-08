import { useParams, Outlet, useOutletContext } from "react-router-dom";

function DirectorCard() {
  const { id } = useParams();
  const { directors } = useOutletContext();

  const director = directors.find(d => d.id === Number(id));

  if (!director) {
    return <h2>Director not found</h2>;
  }

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>
      <Outlet context={{ director }} />
    </div>
  );
}

export default DirectorCard;