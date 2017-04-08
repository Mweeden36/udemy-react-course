import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const API_KEY = '?key=TWlrZWZyaWdnaW53ZWVkZW4';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    action: FETCH_POSTS,
    payload: request
  };
}