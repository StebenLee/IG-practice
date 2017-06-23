import { createAction } from 'redux-actions';
import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  CHANGE_TEXT,
} from '../constants/actionTypes';

export const createComment = createAction('CREATE_COMMENT');
export const deleteComment = createAction('DELETE_COMMENT');
export const changeText = createAction('CHANGE_TEXT');