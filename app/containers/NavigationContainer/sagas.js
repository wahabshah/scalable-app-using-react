import { take, call, put, select,takem} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga';
import {REQUEST_TOPICS,SELECT_TOPIC} from './constants';
import {requestTopicsSucceeded,requestTopicsFailed} from './actions';

function fetchTopicsFromServer(){
    return  fetch("http://localhost:3000/api/topics")
            .then(topics=>topics.json());
}


function* fetchTopics(){
     try
     {
     const topics = yield call(fetchTopicsFromServer);
     yield put(requestTopicsSucceeded(topics));
     }catch(error){
       yield put(requestTopicsFailed(error.message));
     }
}

// Individual exports for testing
export function* defaultSaga() {
  yield takeLatest(REQUEST_TOPICS,fetchTopics); 
}

// All sagas to be loaded
export default [
  defaultSaga
];
