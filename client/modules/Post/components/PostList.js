import React, { PropTypes } from 'react';

// Import Components
import PostListItem from './PostListItem/PostListItem';

function PostList(props) {
  console.log('PostList', props);
  return (
    <div className="listView">
      {
        props.posts.map(p => (
          <PostListItem
            post={p}
            key={p.cuid}
            onDelete={() => props.handleDeletePost(p.cuid)}
            onThumbUp={(ev) => props.handleThumbUp(ev, p.cuid, p)}
            onThumbDown={(ev) => props.handleThumbDown(ev, p.cuid, p)}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
  handleThumbUp: PropTypes.func.isRequired,
  handleThumbDown: PropTypes.func.isRequired
};

export default PostList;
