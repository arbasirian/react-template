import { RouteModel } from 'types';
import { HomePage } from 'pages';

const ROUTES: RouteModel[] = [
  {
    path: '/home',
    slug: 'home',
    exact: true,
    authorized: false,
    component: HomePage,
    permission: 0,
  },
];

export default ROUTES;
