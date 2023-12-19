import { Link, NavLink, Outlet, useNavigation } from 'react-router-dom';

export const RootPage = () => {
  const navigation = useNavigation();

  return (
    <div className="root-container">
      {/* Side Bar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Star Wars</h1>
        </div>
        <div className="sidebar-content">
          <ul>
            <li>
              <NavLink
                to="/planets"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Planets
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/people"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                People
              </NavLink>
            </li>
            <NavLink
                to="/starships"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Star Ships
              </NavLink>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {navigation.state === 'loading' ? (
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
          <Outlet />
        )}
      </div>
    </div>
  );
};
