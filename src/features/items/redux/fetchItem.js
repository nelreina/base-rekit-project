import {
	ITEMS_FETCH_ITEM_BEGIN,
	ITEMS_FETCH_ITEM_SUCCESS,
	ITEMS_FETCH_ITEM_FAILURE,
	ITEMS_FETCH_ITEM_DISMISS_ERROR,
} from './constants';

import { get } from '../../../common/api';

export function fetchItem(id) {
	return (dispatch) => {
		dispatch({
			type: ITEMS_FETCH_ITEM_BEGIN,
		});
		get(`items/${id}`)
			.then(data => {
				dispatch({
					type: ITEMS_FETCH_ITEM_SUCCESS,
					data,
				});
			})
			.catch(data => {
				dispatch({
					type: ITEMS_FETCH_ITEM_FAILURE,
					data,
				});
			});
	};
}

export function dismissFetchItemError() {
	return {
		type: ITEMS_FETCH_ITEM_DISMISS_ERROR,
	};
}

export function reducer(state, action) {
	switch (action.type) {
		case ITEMS_FETCH_ITEM_BEGIN:
			return {
				...state,
				fetchItemPending: true,
				fetchItemError: null,
			};

		case ITEMS_FETCH_ITEM_SUCCESS:
			return {
				...state,
				fetchItemPending: false,
				fetchItemError: null,
				item: action.data,
			};

		case ITEMS_FETCH_ITEM_FAILURE:
			return {
				...state,
				fetchItemPending: false,
				fetchItemError: action.data.error,
			};

		case ITEMS_FETCH_ITEM_DISMISS_ERROR:
			return {
				...state,
				fetchItemError: null,
			};

		default:
			return state;
	}
}
