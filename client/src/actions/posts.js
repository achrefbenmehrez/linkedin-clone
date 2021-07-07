import { START_LOADING, END_LOADING, FETCH_POSTS, CREATE_POST } from '../actionTypes';
import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_POSTS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post , fullname, email) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { newPost } } = await api.createPost(post, fullname, email);

    dispatch({ type: CREATE_POST, payload: newPost });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};