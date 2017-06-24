import React from 'react';
import PostBoxContainer from '../../containers/PostBoxContainer';
import DisqusThread from 'react-disqus-thread';


let time = 1;
const HomePage = ({
  posts
}) => (
<div style={{backgroundColor:"#f7f7f7"}}>
  {
  	
    posts.map((post, index) => (
      <PostBoxContainer post={post} key={index}/>
    )).toJS()
  }
   <h4>討論</h4>
        <DisqusThread
          shortname="pracitce-1"
          identifier="react-disqus-thread"
          title="React Disqus thread component"
        />
     
</div>

);

export default HomePage;