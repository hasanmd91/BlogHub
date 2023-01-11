import React from "react";
import { Grid } from "@mui/material";
import Post from "../POSTS/POST/Post";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

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
