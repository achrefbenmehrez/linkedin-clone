import axios from 'axios';

const API = axios.create({ baseURL: 'https://achref-linkedin-clone.herokuapp.com/' });

export const fetchPosts = () => API.get(`/posts`);
export const createPost = (newPost, fullname, email) => API.post('/posts', { ...newPost, fullname, email });

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);