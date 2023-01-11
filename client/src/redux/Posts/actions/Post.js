import * as api from "../Api/index";

import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "./constants";

// this function dispatch action to the redux store

// get all posts
export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

// create a post
export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);

    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

//update a post
export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = api.updatePost(id, updatedPost);
    console.log(data);
    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

// delete a post
export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = api.deletePost(id);
    dispatch({
      type: DELETE,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};
