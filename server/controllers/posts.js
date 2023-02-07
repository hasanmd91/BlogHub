import mongoose from "mongoose";
import postMessage from "../models/postsMessage.js";

// getAll posts

export const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create new posts

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new postMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a posts

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;

  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`no posts with id`);

  try {
    const updatedPost = await postMessage.findByIdAndUpdate(
      _id,
      { ...post, _id },
      {
        new: true,
      }
    );
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete a posts

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no posts with that id ");
  try {
    await postMessage.findByIdAndDelete(id);
    res.json({ message: "post deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// like posts

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ message: "Invalid post id provided" });

  try {
    const post = await postMessage.findById(id);
    const updatedPost = await postMessage.findByIdAndUpdate(
      id,
      {
        likeCount: post.likeCount + 1,
      },
      { new: true }
    );

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
