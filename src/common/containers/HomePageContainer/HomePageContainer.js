import React from 'react';
import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';

export default connect(
  (state) => ({
    posts: state.getIn(['post', 'posts']),    
  }),
  (dispatch) => ({
  })
)(HomePage);

