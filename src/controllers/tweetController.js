import { createTweet as createTweetService } from "../services/tweetService.js";
export const getTweets=(req,res)=>{
    return res.json({
        message: 'Get all tweets'
    });
}

export const getTweetById=(req,res)=>{
    return res.json({
        message: `Get tweet with id ${req.params.id}`
    });
}

export const createTweet=async (req,res)=>{
    try{
        const response = await createTweetService({
            body: req.body.body
        });
        return res.status(201).json({
            success:true,
            message:'Tweet created successfully',
            data:response
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:'Internal server error',
            success:false
        });
    }
}