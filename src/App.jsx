import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './pages/Home/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Insights from './pages/Insights/Insights';
import Notifications from './pages/Notifications';
import Goals from './pages/Goals';
import Flex from './pages/Flex';
import ErrorPage from './pages/Error';

import Navbar from './components/Navbar';

const routesData = [
  { path: '/profile', component: Profile, title: 'Profile' },
  { path: '/login', component: Login, title: 'Login' },
  { path: '/insights', component: Insights, title: 'Insights' },
  { path: '/notifications', component: Notifications, title: 'Notifications' },
  { path: '/goals', component: Goals, title: 'Goals' },
  { path: '/flex', component: Flex, title: 'Flex' },
  { path: '/error', component: ErrorPage, title: 'Error' },
  { path: '/', component: Home, title: 'Pimsa' },
];

const App = () => {
  return (
      <Router>
        <Navbar></Navbar>
        <Routes>
          {routesData.map(({ path, component: Component, title }) => (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <Helmet>
                    <title>{title || 'Pimsa'}</title>
                  </Helmet>
                  <Component />
                </>
              }
            />
          ))}

          <Route
            path="/*"
            element={
              <>
                <Helmet>
                  <title>404 - Not Found</title>
                </Helmet>
                <ErrorPage errorCode={404} />
              </>
            }
          />
        </Routes>
      </Router>
  );
};

export default App;
