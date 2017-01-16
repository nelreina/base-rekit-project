import {
  ITEMS_SAMPLE_ACTION,
} from './constants';

export function sampleAction() {
  return {
    type: ITEMS_SAMPLE_ACTION,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case ITEMS_SAMPLE_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}
