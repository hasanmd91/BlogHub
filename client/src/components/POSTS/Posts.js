import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Post from "../POSTS/POST/Post";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/Posts/actions/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const distpatch = useDispatch();

  console.log(posts);

  useEffect(() => {
    distpatch(getPost());
  }, []);

  return (
    <Grid container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
