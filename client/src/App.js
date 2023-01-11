import React from "react";
import { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Form from "./components/FORM/Form";
import Posts from "./components/POSTS/Posts";
import { useDispatch } from "react-redux";
import { getPost } from "./redux/Posts/actions/Post";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar
        position="static"
        color="inherit"
        sx={{
          borderRadius: 10,
          margin: "30px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{ color: "rgba(0,183,255, 1)" }}
        >
          Memories
        </Typography>
        <Box sx={{ marginLeft: "15px" }}>
          <img
            src="https://pluspng.com/img-png/brain-memory-png-fixing-a-hole-in-your-memory-2022.png"
            alt="icon"
            height="60"
          />
        </Box>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
