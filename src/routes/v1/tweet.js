import express from 'express';
import { getTweets,getTweetById,createTweet,deleteTweetById ,updateTweetById} from '../../controllers/tweetController.js';
import {validate} from '../../validators/zodValidator.js';
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';
import { getTweetByIdManuelValidator } from '../../validators/tweetManualValidator.js';

const router = express.Router();// create a router object

router.get('/',getTweets);//hit when request made to /api/v1/tweets

router.get('/:id',getTweetByIdManuelValidator,getTweetById)//hit when request made to /api/v1/tweets/:id

router.post('/',validate(tweetZodSchema),createTweet);//hit when a post request is made to /api/v1/tweets to create a new tweet

router.delete('/:id',getTweetByIdManuelValidator,deleteTweetById);//hit when a delete request is made to /api/v1/tweets/:id to delete a tweet by id

router.put('/:id',getTweetByIdManuelValidator, updateTweetById);//hit when a put request is made to /api/v1/tweets/:id to update a tweet by id

export default router;// export the router object