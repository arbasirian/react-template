import React, { Suspense, FC } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import ROUTES from 'routes';
import RouteWithSubRoutes from 'RouteWithSubRoutes';

import 'assets/styles/App.css';

const App: FC = () => (
  <Suspense fallback={() => console.log(`111`, 111)}>
    <Router>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Switch>
        {ROUTES.map((route) => (
          <RouteWithSubRoutes key={route.slug} {...route} />
        ))}
      </Switch>
    </Router>
  </Suspense>
);

export default App;
