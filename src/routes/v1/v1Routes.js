import express from 'express';
import tweetRouter from "./tweet.js";
import commentRouter from "./comments.js";

const router = express.Router();

router.use("/tweets", tweetRouter); //if the remaining req url starts with /api/v1/tweets, use the tweetRouter

router.use("/comments", commentRouter); //if the remaining req url starts with /api/v1/comments, use the commentRouter

export default router;