import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
// import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { REQUEST_LINKS } from './constants';
import { requestLinksSucceeded, requestLinksFailed } from './actions';

function fetchLinksFromServer(topicName) {
  return fetch(`/api/topics/${topicName}/links`)
             .then(response => response.json());
}

export function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topicName);
    yield put(requestLinksSucceeded(links));
  } catch (error) {
    yield put(requestLinksFailed(error.message));
  }
}


// Individual exports for testing
export function* defaultSaga() {
  yield takeEvery(REQUEST_LINKS, fetchLinks);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
