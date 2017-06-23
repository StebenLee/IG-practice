import { connect } from 'react-redux';
import CommentList from '../../components/CommentList';
import {
	deleteComment,
} from '../../actions';

export default connect(
  (state) => ({
  	comments: state.getIn(['comment', 'comments'])
  }),
  (dispatch) => ({
  	onDeleteComment: (index) => () => (
  	  dispatch(deleteComment({ index }))
  	)
  })
)(CommentList);