import { FETCH_POSTS, CREATE_POST, START_LOADING, END_LOADING } from '../actionTypes';

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};