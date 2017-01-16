import {
  DefaultPage,
} from './index';

export default {
  path: 'items',
  name: 'Items',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
  ],
};
