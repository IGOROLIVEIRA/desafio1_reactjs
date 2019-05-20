import React from 'react';
import Post from '../Post';

import './style.scss';

const Posts = props => (
  <div className="posts">
    {props.posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </div>
);

export default Posts;
