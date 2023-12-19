import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { PlanetListPage } from './PlanetList';
import { PlanetDetailsPage } from './PlanetDetails';
import { RootPage } from './Rootpage';
import { PeopleDetailsPage } from './PeopleDetails';
import { PeopleListPage } from './PeopleList';
import { getPageNoFromUrl } from './utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StarShipsList } from './Starship';
import { StarshiptDetailsPage } from './StarshipDetails';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: 'planets',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <PlanetListPage />
          },
          {
            path: ':id',
            element: <PlanetDetailsPage />,
            loader: planetIdLoader
          }
        ]
      },
      {
        path: 'people',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <PeopleListPage />
          },
          {
            path: ':id',
            element: <PeopleDetailsPage />
          }
        ]
      },
      {
        path: 'starships',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <StarShipsList />
          },
          {
            path:':id',
            element:<StarshiptDetailsPage/>,
            loader: starshipsIdLoader
          }
        ]
      }
    ]
  }
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}


function planetIdLoader({ params }) {
  return fetch(`https://swapi.dev/api/planets/${params.id}/`).then(res =>
    res.json()
  );
}

function starshipsIdLoader({ params }) {
  return fetch(`https://swapi.dev/api/starships/${params.id}/`).then(res =>
    res.json()
  );
}


