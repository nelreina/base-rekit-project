import App from '../containers/App';
import { PageNotFound } from '../features/common';
import homeRoute from '../features/home/route';
import commonRoute from '../features/common/route';
import itemsRoute from '../features/items/route';

const routes = [{// REKIT_ARCHOR_DO_NOT_CHANGE
  path: '/',
  component: App,
  childRoutes: [
    homeRoute,
    commonRoute,
    itemsRoute,
  ].filter(r => r.component || (r.childRoutes && r.childRoutes.length > 0)), // REKIT_ARCHOR_DO_NOT_CHANGE // If a feature has no router rules, remove it.
}];

// Handle isIndex property of route config:
//  1. remove the first child with isIndex=true if no path property from childRoutes
//  2. assign it to the indexRoute property of the parent.
function handleIndexRoute(route) {
  if (!route.childRoutes || !route.childRoutes.length) {
    return;
  }

  route.childRoutes = route.childRoutes.filter(child => { // eslint-disable-line
    if (child.isIndex) {
      /* istanbul ignore next */
      if (process.env.NODE_ENV === 'dev' && route.indexRoute) {
        console.error('More than one index route: ', route);
      }

      /* istanbul ignore else */
      if (!route.indexRoute) {
        const indexRoute = { ...child };
        delete indexRoute.path;
        route.indexRoute = indexRoute; // eslint-disable-line
        if (!child.path) return false;
      }
    }
    return true;
  });

  route.childRoutes.forEach(handleIndexRoute);
}

routes.forEach(handleIndexRoute);
export default routes;
