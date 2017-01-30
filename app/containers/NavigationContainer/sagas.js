import { call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { REQUEST_TOPICS, SELECT_TOPIC, REQUEST_TOPICS_SUCCEEDED } from './constants';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';
import { push } from 'react-router-redux';
import selectNavigationContainer from './selectors';

function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
            .then(topics => topics.json());
}


function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceeded(topics));
  } catch (error) {
    yield put(requestTopicsFailed(error.message));
  }
}

function* pushTopic(action) {
  yield put(push(`/topics/${action.topic.name}`));
}

function* selectDefaultTopic() {
  const state = yield select(selectNavigationContainer());
  if (!state.selectedTopic) {
    yield put(push(`/topics/${state.topics[0].name}`));
  }
}

export function* selectDefaultTopicSaga() {
  yield* takeLatest(REQUEST_TOPICS_SUCCEEDED, selectDefaultTopic);
}

export function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopic);
}

// Individual exports for testing
export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
  selectTopicSaga,
  selectDefaultTopicSaga,
];
