import { useLoaderData } from 'react-router-dom';

export function PeopleDetailsPage() {
  const data = useLoaderData();

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>People Details</h1>
      <h4>{data.name}</h4>
      <p>Height: {data.height}</p>
      <p>Birth Year: {data.birth_year}</p>
      <p>Gender: {data.gender}</p>
    </div>
  );
}