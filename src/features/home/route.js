import {
  DefaultPage,
} from './index';

export default {
  path: '',
  name: 'Home',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
  ],
};
