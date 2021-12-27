import React, { Suspense, FC } from 'react';
import { Route } from 'react-router-dom';

import { RouteModel } from 'types';
import { MainLayout } from 'layouts';

type Props = {
  route: RouteModel;
};
const Authorized = ({ route }: Props) => {
  const isAuthorized = false;

  if (isAuthorized) {
    // TODO: Design auth login form for users
    return <></>;
  }

  return (
    <MainLayout>
      <Route
        path={route.path}
        render={(props: any) => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    </MainLayout>
  );
};

export default Authorized;
