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
    const { data } = await api.updatePost(id, updatedPost);

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
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

// like a post

export const createLike = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
