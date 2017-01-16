import { expect } from 'chai';

import {
  ITEMS_SAMPLE_ACTION,
} from 'src/features/items/redux/constants';

import {
  sampleAction,
  reducer,
} from 'src/features/items/redux/sampleAction';

describe('items/redux/sampleAction', () => {
  it('returns correct action by sampleAction', () => {
    const expectedAction = {
      type: ITEMS_SAMPLE_ACTION,
    };
    expect(sampleAction()).to.deep.equal(expectedAction);
  });

  it('handles action type ITEMS_SAMPLE_ACTION correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: ITEMS_SAMPLE_ACTION }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
