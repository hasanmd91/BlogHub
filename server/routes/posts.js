import { getPosts, createPost, updatePost } from "../controllers/posts.js";
import express from "express";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);

export default router;
