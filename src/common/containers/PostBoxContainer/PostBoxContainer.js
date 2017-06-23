import React from 'react';
import { connect } from 'react-redux';
import PostBox from '../../components/PostBox';
import { browserHistory } from 'react-router';

import {
  deletePost,
  setPost,
  setUi
} from '../../actions';

export default connect(
  (state) => ({
    isAuthorized: state.getIn(['user', 'isAuthorized']),
    posts: state.getIn(['post', 'posts']),
  }),
  (dispatch) => ({
    onDeletePost: (postId) => () => (
      dispatch(deletePost(dispatch, postId))
    ),
    onUpadatePost: (posts) => (postId) => () => {
      const postIndex = posts.findIndex((_post) => (_post.get('_id') === postId));
      const post = postIndex !== -1 ? posts.get(postIndex) : undefined;
      dispatch(setPost({ keyPath: ['post'], value: post }));
      dispatch(setPost({ keyPath: ['post', 'id'], value: postId }));
      dispatch(setUi({ key: 'isEdit', value: true }));
      browserHistory.push('/share?postId=' + postId); 
    },
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { posts } = stateProps; 
    const { onUpadatePost } = dispatchProps; 
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      onUpadatePost: onUpadatePost(posts),
    });
  }
)(PostBox);

