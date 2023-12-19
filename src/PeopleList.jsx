import { Link, useLoaderData } from 'react-router-dom';

export function PeopleListPage() {
  const people = useLoaderData();

  return (
    <div>
      <h1>People List</h1>
      <ol>
        {people.results.map(p => {
          const id = p.url
            .replace('https://swapi.dev/api/people/', '')
            .replace('/', '');

          return (
            <li key={id}>
              <Link to={`/people/${id}`}>{p.name}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}