import { connect } from 'react-redux';
import Comment from '../../components/Comment';

import {
	changeText,
	createComment,
} from '../../actions';

export default connect(
  (state) => ({
  	comment: state.getIn(['comment', 'comment'])
  }),
  (dispatch) => ({
  	onChangeText: (event) => (
  	  dispatch(changeText({ text: event.target.value }))
  	),
  	onCreateComment: () => {
  		dispatch(createComment());
  		dispatch(changeText({ text: ''}));
  	} 
  })
)(Comment); 