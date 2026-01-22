import express from 'express';
import { getTweets,getTweetById,createTweet } from '../../controllers/tweetController.js';
import {validate} from '../../validators/zodValidator.js';
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';

const router = express.Router();// create a router object

router.get('/',getTweets);//hit when request made to /api/v1/tweets

router.get('/:id',getTweetById)//hit when request made to /api/v1/tweets/:id

router.post('/',validate(tweetZodSchema),createTweet);//hit when a post request is made to /api/v1/tweets to create a new tweet

export default router;// export the router object