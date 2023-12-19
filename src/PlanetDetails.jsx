import { useLoaderData } from 'react-router-dom';

export function PlanetDetailsPage() {
  const data = useLoaderData();

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>Planet Details</h1>
      <h4>{data.name}</h4>
      <p>Population: {data.population}</p>
      <p>Gravity: {data.gravity}</p>
      <p>Climate: {data.climate}</p>
    </div>
  );
}
