import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from '../PostHeader';

import './style.scss';

const Post = props => (
  <div className="post">
    <PostHeader avatar={props.post.avatar} author={props.post.author} time={props.post.time} />
    <p>{props.post.text}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
export default Post;
