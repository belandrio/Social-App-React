import {
  SET_POSTS,
  LOADING_POST
} from '../types';
import axios from 'axios';

// Get all Posts
export const getPosts = () => (dispatch) => {
  dispatch({ type: LOADING_POST });
  axios
    .get('/posts')
    .then((res) => {
      dispatch({
        type: SET_POSTS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_POSTS,
        payload: []
      });
    });
};