import initialState from './initialState';
import { reducer as fetchList } from './fetchList';
import { reducer as createItem } from './createItem';
import { reducer as fetchItem } from './fetchItem';

const reducers = [
  fetchList,
  createItem,
  fetchItem,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
