import React from 'react';
import ReactDOM from 'react-dom';


const CommentList = ({
  comments,
  onDeleteComment,
}) => (
  <div>
    <ul>
    {
    	comments.map((comment, index) => (
    		<li key={index}>
    		  {comment.get('text')}
    		  <button onClick={onDeleteComment(index)}>X</button>
    		</li>
    	)).toJS()
    }
    </ul>
  </div>
);

export default CommentList;