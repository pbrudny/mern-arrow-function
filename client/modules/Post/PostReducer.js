import { ADD_POST, EDIT_POST, ADD_POSTS, DELETE_POST, THUMB_UP, THUMB_DOWN } from './PostActions';

// Initial State
const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    return {
      data: [action.post, ...state.data],
    };
  } else if (action.type === ADD_POSTS) {
    return {
      data: action.posts,
    };
  } else if (action.type === EDIT_POST) {
    return {
      data: state.data.map(post => {
        return post.cuid === action.cuid ? Object.assign({}, post, action.post) : post;
      }),
    };
  } else if (action.type === DELETE_POST) {
    return {
      data: state.data.filter(post => post.cuid !== action.cuid),
    };
  } else if (action.type === THUMB_UP) {
    return {
      data: state.data.map(post => {
        if (post.cuid === action.cuid) {
          post.votesCount += 1;
        }
        return post;
      }),
      // data: [{}, {}]
    };
  } else if (action.type === THUMB_DOWN) {
    return {
      data: state.data.map(post => {
        if (post.cuid === action.cuid) {
          post.votesCount -= 1;
        }
        return post;
      }),
      // data: [{}, {}]
    };
  }
  else {
    return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default PostReducer;
