import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const PostHeader = props => (
  <div className="author">
    <img className="avatar" src={props.avatar} alt="avatar" />
    <div>
      <strong>{props.author}</strong>
      <span>{props.time}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default PostHeader;
