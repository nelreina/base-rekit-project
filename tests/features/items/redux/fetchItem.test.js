import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  ITEMS_FETCH_ITEM_BEGIN,
  ITEMS_FETCH_ITEM_SUCCESS,
  ITEMS_FETCH_ITEM_FAILURE,
  ITEMS_FETCH_ITEM_DISMISS_ERROR,
} from 'src/features/items/redux/constants';

import {
  fetchItem,
  dismissFetchItemError,
  reducer,
} from 'src/features/items/redux/fetchItem';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('items/redux/fetchItem', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when fetchItem succeeds', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: ITEMS_FETCH_ITEM_BEGIN },
      { type: ITEMS_FETCH_ITEM_SUCCESS, data: {} },
    ];

    return store.dispatch(fetchItem({ error: false }))
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });

  it('dispatches failure action when fetchItem fails', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: ITEMS_FETCH_ITEM_BEGIN },
      { type: ITEMS_FETCH_ITEM_FAILURE, data: { error: 'some error' } },
    ];

    return store.dispatch(fetchItem({ error: true }))
      .catch(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });

  it('returns correct action by dismissFetchItemError', () => {
    const expectedAction = {
      type: ITEMS_FETCH_ITEM_DISMISS_ERROR,
    };
    expect(dismissFetchItemError()).to.deep.equal(expectedAction);
  });

  it('handles action type ITEMS_FETCH_ITEM_BEGIN correctly', () => {
    const prevState = { fetchItemPending: true };
    const state = reducer(
      prevState,
      { type: ITEMS_FETCH_ITEM_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchItemPending).to.be.true;
  });

  it('handles action type ITEMS_FETCH_ITEM_SUCCESS correctly', () => {
    const prevState = { fetchItemPending: true };
    const state = reducer(
      prevState,
      { type: ITEMS_FETCH_ITEM_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchItemPending).to.be.false;
  });

  it('handles action type ITEMS_FETCH_ITEM_FAILURE correctly', () => {
    const prevState = { fetchItemPending: true };
    const state = reducer(
      prevState,
      { type: ITEMS_FETCH_ITEM_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchItemPending).to.be.false;
    expect(state.fetchItemError).to.exist;
  });

  it('handles action type ITEMS_FETCH_ITEM_DISMISS_ERROR correctly', () => {
    const prevState = { fetchItemError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: ITEMS_FETCH_ITEM_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchItemError).to.be.null;
  });
});
