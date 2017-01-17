import {
	DefaultPage,
	Single,
	Form,
} from './index';

export default {
	path: 'items',
	name: 'Items',
	childRoutes: [
		{ path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
		{ path: 'page/:id', name: 'Single', component: Single },
		{ path: 'form', name: 'Form', component: Form },
	],
};
