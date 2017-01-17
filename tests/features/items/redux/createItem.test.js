import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  ITEMS_CREATE_ITEM_BEGIN,
  ITEMS_CREATE_ITEM_SUCCESS,
  ITEMS_CREATE_ITEM_FAILURE,
  ITEMS_CREATE_ITEM_DISMISS_ERROR,
} from 'src/features/items/redux/constants';

import {
  createItem,
  dismissCreateItemError,
  reducer,
} from 'src/features/items/redux/createItem';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('items/redux/createItem', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when createItem succeeds', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: ITEMS_CREATE_ITEM_BEGIN },
      { type: ITEMS_CREATE_ITEM_SUCCESS, data: {} },
    ];

    return store.dispatch(createItem({ error: false }))
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });

  it('dispatches failure action when createItem fails', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: ITEMS_CREATE_ITEM_BEGIN },
      { type: ITEMS_CREATE_ITEM_FAILURE, data: { error: 'some error' } },
    ];

    return store.dispatch(createItem({ error: true }))
      .catch(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });

  it('returns correct action by dismissCreateItemError', () => {
    const expectedAction = {
      type: ITEMS_CREATE_ITEM_DISMISS_ERROR,
    };
    expect(dismissCreateItemError()).to.deep.equal(expectedAction);
  });

  it('handles action type ITEMS_CREATE_ITEM_BEGIN correctly', () => {
    const prevState = { createItemPending: true };
    const state = reducer(
      prevState,
      { type: ITEMS_CREATE_ITEM_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.createItemPending).to.be.true;
  });

  it('handles action type ITEMS_CREATE_ITEM_SUCCESS correctly', () => {
    const prevState = { createItemPending: true };
    const state = reducer(
      prevState,
      { type: ITEMS_CREATE_ITEM_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.createItemPending).to.be.false;
  });

  it('handles action type ITEMS_CREATE_ITEM_FAILURE correctly', () => {
    const prevState = { createItemPending: true };
    const state = reducer(
      prevState,
      { type: ITEMS_CREATE_ITEM_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.createItemPending).to.be.false;
    expect(state.createItemError).to.exist;
  });

  it('handles action type ITEMS_CREATE_ITEM_DISMISS_ERROR correctly', () => {
    const prevState = { createItemError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: ITEMS_CREATE_ITEM_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.createItemError).to.be.null;
  });
});
