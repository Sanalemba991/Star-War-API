import { useQuery } from '@tanstack/react-query';
import { Link, useSearchParams } from 'react-router-dom';
import { getPageNoFromUrl } from './utils';


export function StarShipsList() {
  const [searchParam, setSearchParam] = useSearchParams();
  const pageNo = searchParam.get('page') || '1';
  const search = searchParam.get('search') || '';


  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['starship/list', pageNo, search],
    queryFn: async () => {
      const res = await fetch(
        `https://swapi.dev/api/starships/?page=${pageNo}&search=${search}`
      );

      if (res.ok) {
        return res.json();
      }

      return Promise.reject('Could not fetch data');
    }
  });
  const prevPage = getPageNoFromUrl(data?.previous);
  const nextPage = getPageNoFromUrl(data?.next);


  if (isError) {
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <p>{String(error)}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Star Ship List</h1>
      <input
        placeholder="Search..."
        value={search}
        onChange={e => {
          const sp = new URLSearchParams(searchParam);
          sp.set('page', 1);
          sp.set('search', e.target.value);

          setSearchParam(sp);
        }}
      />
      {isLoading ? (
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <div>
            {data?.results?.map(p => {
              const id = p.url
                .replace('https://swapi.dev/api/starships/', '')
                .replace('/', '');

              return (
                <p key={id}>
                  <Link to={`/starships/${id}`}>
                    {id} - {p.name}
                  </Link>
                </p>
              );
            })}
          </div>
          <br />
          <div>
            {prevPage && (
              <Link to={`?page=${prevPage}&search=${search}`}>Prev</Link>
            )}

            <br />

            {nextPage && (
              <Link to={`?page=${nextPage}&search=${search}`}>Next</Link>
            )}
          </div>
        </>
      )}
    </div>
  );
}
