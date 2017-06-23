import React from 'react';
import { connect } from 'react-redux';
import ShareBox from '../../components/ShareBox';

import { 
  addPost,
  updatePost,
  showSpinner,
  setPost,
} from '../../actions';

export default connect(
  (state) => ({
    posts: state.getIn(['post', 'posts']),
    postId: state.getIn(['post', 'post', 'id']),
    name: state.getIn(['post', 'post', 'name']),
    description: state.getIn(['post', 'post', 'description']),
    imagePath: state.getIn(['post', 'post', 'imagePath']),
    isEdit: state.getIn(['ui', 'isEdit']),
  }),
  (dispatch) => ({
    onChangeNameInput: (event) => (
      dispatch(setPost({ keyPath: ['post', 'name'], value: event.target.value }))
    ),
    onChangeDescriptionInput: (event) => (
      dispatch(setPost({ keyPath: ['post', 'description'], value: event.target.value }))
    ),
    onChangeImageUrl: (event) => (
      dispatch(setPost({ keyPath: ['post', 'imagePath'], value: event.target.value }))
    ),    
    onPostSubmit: (posts, postId, name, description, imagePath, isEdit) => () => {
      if (isEdit === true) {
        dispatch(updatePost(dispatch, postId, name, description, imagePath));
        dispatch(showSpinner());
      } else {
        dispatch(addPost(dispatch, name, description, imagePath));
        dispatch(showSpinner());
      }
    },    
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { posts, postId, name, description, imagePath, isEdit } = stateProps;
    const { onPostSubmit } = dispatchProps;
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      onPostSubmit: onPostSubmit(posts, postId, name, description, imagePath, isEdit),
    });
  }  
)(ShareBox);

