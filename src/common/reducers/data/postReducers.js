import { handleActions } from 'redux-actions';
import { PostState } from '../../constants/models';

import {
  GET_POST,
  GET_POSTS,
  SET_POST,
} from '../../constants/actionTypes';

const postReducers = handleActions({
  GET_POSTS: (state, { payload }) => (
    state.set(
      'posts',
      payload.posts
    )
  ),
  GET_POST: (state, { payload }) => (
    state.set(
      'post',
      payload.post
    )
  ),
  SET_POST: (state, { payload }) => (
    state.setIn(payload.keyPath, payload.value)
  ),  
}, PostState);

export default postReducers;
