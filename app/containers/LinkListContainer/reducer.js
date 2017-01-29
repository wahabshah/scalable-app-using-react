/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED
} from './constants';

const initialState = fromJS({
  links:[]
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINKS_SUCCEEDED:
    return state.set("links",fromJS(action.links));
    case REQUEST_LINKS_FAILED:
    return state;
    default:
      return state;
  }
}

export default linkListContainerReducer;
