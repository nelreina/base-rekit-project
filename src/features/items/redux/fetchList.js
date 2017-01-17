import {
	ITEMS_FETCH_LIST_BEGIN,
	ITEMS_FETCH_LIST_SUCCESS,
	ITEMS_FETCH_LIST_FAILURE,
	ITEMS_FETCH_LIST_DISMISS_ERROR,
} from './constants';

import { get } from '../../../common/api';

export function fetchList(args) {
	return (dispatch) => {
		dispatch({
			type: ITEMS_FETCH_LIST_BEGIN,
		});
		get('items')
			.then(data => {
				dispatch({
					type: ITEMS_FETCH_LIST_SUCCESS,
					data,
				});
			})
			.catch(data => {
				dispatch({
					type: ITEMS_FETCH_LIST_FAILURE,
					data,
				});
			});
	};
}

export function dismissFetchListError() {
	return {
		type: ITEMS_FETCH_LIST_DISMISS_ERROR,
	};
}

export function reducer(state, action) {
	switch (action.type) {
		case ITEMS_FETCH_LIST_BEGIN:
			return {
				...state,
				fetchListPending: true,
				fetchListError: null,
			};

		case ITEMS_FETCH_LIST_SUCCESS:
			return {
				...state,
				fetchListPending: false,
				fetchListError: null,
				list: action.data,
				item: {},
			};

		case ITEMS_FETCH_LIST_FAILURE:
			return {
				...state,
				fetchListPending: false,
				fetchListError: action.data.error,
			};

		case ITEMS_FETCH_LIST_DISMISS_ERROR:
			return {
				...state,
				fetchListError: null,
			};

		default:
			return state;
	}
}
