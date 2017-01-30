/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
  SELECT_TOPIC,
  TOGGLE_DRAWER,
} from './constants';

const initialState = fromJS(
  {
    topics: [
  //     {
  //       name:"libraries",
  //       description:"links to useful open source libraries"
  //     },
  //     {
  //       name:"apps",
  //       description:"links to new and exciting apps"
  //     },
  //     {
  //       name:"news",
  //       description:"links to programming related new stuff"
  //     }
    ],
    isDrawerOpen: false,
  }
);

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS:
      return state;
    case REQUEST_TOPICS_SUCCEEDED:
      return state.set('topics', fromJS(action.topics));
    case REQUEST_TOPICS_FAILED:
      return state;
    case SELECT_TOPIC:
      return state.set('selectedTopic', fromJS(action.topic)).set('isDrawerOpen', false);
    case TOGGLE_DRAWER:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
    default:
      return state;
  }
}

export default navigationContainerReducer;
