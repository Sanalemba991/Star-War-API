import { useLoaderData } from 'react-router-dom';

export function StarshiptDetailsPage() {
  const data = useLoaderData();

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>Planet Maming</h1>
      <h4>{data.MGLT}</h4>
      <p>species: {data.cargo_capacity}</p>
      <p>director: {data.created}</p>
      <p>producer: {data.passengers}</p>
    </div>
  );
}
