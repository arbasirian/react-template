import React, { Suspense, useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Cookies from 'js-cookie';

import ROUTES from 'routes';
import { RouteModel } from 'types';
import { MainLayout } from 'layouts';

import connectHelper from 'helpers/connect.helper';

import GlobalStyle from 'assets/styles/global.styles';

const connect = connectHelper(() => ({}));

function RouteWithSubRoutes(route: RouteModel) {
  return (
    <>
      <GlobalStyle />
      {/* TODO; Handle Share page here */}
      {route.authorized ? (
        <MainLayout>
          <Route
            path={route.path}
            render={(props: any) => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
        </MainLayout>
      ) : (
        <MainLayout>
          <Route
            path={route.path}
            render={(props: any) => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
        </MainLayout>
      )}
    </>
  );
}

type Props = {
  promise?: any;
};

function App({ promise }: Props) {
  return (
    <Suspense fallback={() => {}}>
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
}

export default connect(App);
