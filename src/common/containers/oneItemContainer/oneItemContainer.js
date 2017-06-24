import React from 'react';
import { connect } from 'react-redux';
import oneItem from '../../components/oneItem';

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
  })
)(oneItem);