import * as api from "../Api/index";

// this function dispatch action to the redux store
export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({
      type: "FETCH",
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);

    dispatch({
      type: "CREATE",
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = api.updatePost(id, updatedPost);

    dispatch({
      type: " UPDATE",
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = api.deletePost(id);
    dispatch({
      type: " DELETE",
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};
