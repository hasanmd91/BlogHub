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

// export const updatedPost = async (req, res) => {
//   const { id } = req.params;
//   const { creator, title, message, tags, selectedFile, _id: id  } = req.body;

//   const newPost =

//   try {
//     const updatedPost = postMessage.findByIdAndUpdate(_id, {});
//   } catch (error) {
//     console.log(error);
//   }
// };
