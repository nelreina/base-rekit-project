import { expect } from 'chai';

import {
  ITEMS_SAVE,
} from 'src/features/items/redux/constants';

import {
  save,
  reducer,
} from 'src/features/items/redux/save';

describe('items/redux/save', () => {
  it('returns correct action by save', () => {
    const expectedAction = {
      type: ITEMS_SAVE,
    };
    expect(save()).to.deep.equal(expectedAction);
  });

  it('handles action type ITEMS_SAVE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ITEMS_SAVE }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
