import React from 'react';
import PostBoxContainer from '../../containers/PostBoxContainer';



const HomePage = ({
  posts
}) => (
<div>
  {
    posts.map((post, index) => (
      <PostBoxContainer post={post} key={index}/>
    )).toJS()
  }
</div>
);

export default HomePage;