import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  ITEMS_FETCH_LIST_BEGIN,
  ITEMS_FETCH_LIST_SUCCESS,
  ITEMS_FETCH_LIST_FAILURE,
  ITEMS_FETCH_LIST_DISMISS_ERROR,
} from 'src/features/items/redux/constants';

import {
  fetchList,
  dismissFetchListError,
  reducer,
} from 'src/features/items/redux/fetchList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('items/redux/fetchList', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when fetchList succeeds', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: ITEMS_FETCH_LIST_BEGIN },
      { type: ITEMS_FETCH_LIST_SUCCESS, data: {} },
    ];

    return store.dispatch(fetchList({ error: false }))
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });

  it('dispatches failure action when fetchList fails', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: ITEMS_FETCH_LIST_BEGIN },
      { type: ITEMS_FETCH_LIST_FAILURE, data: { error: 'some error' } },
    ];

    return store.dispatch(fetchList({ error: true }))
      .catch(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });

  it('returns correct action by dismissFetchListError', () => {
    const expectedAction = {
      type: ITEMS_FETCH_LIST_DISMISS_ERROR,
    };
    expect(dismissFetchListError()).to.deep.equal(expectedAction);
  });

  it('handles action type ITEMS_FETCH_LIST_BEGIN correctly', () => {
    const prevState = { fetchListPending: true };
    const state = reducer(
      prevState,
      { type: ITEMS_FETCH_LIST_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchListPending).to.be.true;
  });

  it('handles action type ITEMS_FETCH_LIST_SUCCESS correctly', () => {
    const prevState = { fetchListPending: true };
    const state = reducer(
      prevState,
      { type: ITEMS_FETCH_LIST_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchListPending).to.be.false;
  });

  it('handles action type ITEMS_FETCH_LIST_FAILURE correctly', () => {
    const prevState = { fetchListPending: true };
    const state = reducer(
      prevState,
      { type: ITEMS_FETCH_LIST_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchListPending).to.be.false;
    expect(state.fetchListError).to.exist;
  });

  it('handles action type ITEMS_FETCH_LIST_DISMISS_ERROR correctly', () => {
    const prevState = { fetchListError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: ITEMS_FETCH_LIST_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchListError).to.be.null;
  });
});
