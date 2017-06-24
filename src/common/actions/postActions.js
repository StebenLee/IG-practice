import { createAction } from 'redux-actions';
import WebAPI from '../utils/WebAPI';

import {
  GET_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  SET_POST,
} from '../constants/actionTypes';

export const getPosts = createAction('GET_POSTS', WebAPI.getPosts);
export const getPost = createAction('GET_POST', WebAPI,getPost);
export const addPost = createAction('ADD_POST', WebAPI.addPost);
export const updatePost = createAction('UPDATE_POST', WebAPI.updatePost);
export const deletePost = createAction('DELETE_POST', WebAPI.deletePost);
export const setPost = createAction('SET_POST');
