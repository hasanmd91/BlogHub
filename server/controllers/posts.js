import mongoose from "mongoose";
import postMessage from "../models/postsMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new postMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

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
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no posts with that id ");
  try {
    await postMessage.findByIdAndRemove(id);
    res.json({ message: "post deleted sucessfully" });
  } catch (error) {
    console.log(error);
  }
};
