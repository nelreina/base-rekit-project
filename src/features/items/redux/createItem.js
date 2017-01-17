import {
	ITEMS_CREATE_ITEM_BEGIN,
	ITEMS_CREATE_ITEM_SUCCESS,
	ITEMS_CREATE_ITEM_FAILURE,
	ITEMS_CREATE_ITEM_DISMISS_ERROR,
} from './constants';

import { put } from '../../../common/api';
import { getShort } from '../../../_utils';

export function createItem(item) {
	item['short'] = getShort(item.editor);
	return (dispatch) => {
		dispatch({
			type: ITEMS_CREATE_ITEM_BEGIN,
		});
		put('items', item)
			.then(data => {
				dispatch({
					type: ITEMS_CREATE_ITEM_SUCCESS,
					data,
				});
			})
			.catch(data => {
				dispatch({
					type: ITEMS_CREATE_ITEM_FAILURE,
					data,
				});
			});
	};
}

export function dismissCreateItemError() {
	return {
		type: ITEMS_CREATE_ITEM_DISMISS_ERROR,
	};
}

export function reducer(state, action) {
	switch (action.type) {
		case ITEMS_CREATE_ITEM_BEGIN:
			return {
				...state,
				createItemPending: true,
				createItemError: null,
			};

		case ITEMS_CREATE_ITEM_SUCCESS:
			if (state.list) {
				state.list.push(action.data)
			}
			return {
				...state,
				createItemPending: false,
				createItemError: null,
				item: {},
			};

		case ITEMS_CREATE_ITEM_FAILURE:
			return {
				...state,
				createItemPending: false,
				createItemError: action.data.error,
			};

		case ITEMS_CREATE_ITEM_DISMISS_ERROR:
			return {
				...state,
				createItemError: null,
			};

		default:
			return state;
	}
}
