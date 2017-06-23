import { handleActions } from 'redux-actions';
import { CommentState } from '../../constants/models';

import {
	CREATE_COMMENT,
	DELETE_COMMENT,
	CHANGE_TEXT,
} from '../../constants/actionTypes';

const commentReducers = handleActions({
	CREATE_COMMENT: (state) => {
	  let comments = state.get('comments').push(state.get('comment'));
	  return state.set('comments',comments)
	},
	DELETE_COMMENT: (state, { payload }) => (
	  state.set('comments', state.get('comments').splice(payload.index, 1))
	),
	CHANGE_TEXT: (state, { payload }) => (
	  state.merge({ 'comment': payload })
	)
}, CommentState);

export default commentReducers;