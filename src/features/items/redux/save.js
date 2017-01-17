import {
  ITEMS_SAVE,
} from './constants';

export function save() {
  return {
    type: ITEMS_SAVE,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case ITEMS_SAVE:
      return {
        ...state,
      };

    default:
      return state;
  }
}
