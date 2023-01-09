import { getPosts, createPost } from "../controllers/posts.js";
import express from "express";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);

export default router;
