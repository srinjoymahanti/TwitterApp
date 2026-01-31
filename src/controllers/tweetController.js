import { createTweet as createTweetService,
    getTweets as getTweetsService,
getTweetById as getTweetByIdService,
deleteTweetById as deleteTweetByIdService ,
updateTweetById as updateTweetByIdService
} from "../services/tweetService.js";
import {errorResponse,successResponse} from "../utils/responses.js";



export const createTweet=async (req,res)=>{
    try{
        const response = await createTweetService({
            body: req.body.body
        });
        return successResponse(response,'Tweet created successfully');
    }catch(err){
        return errorResponse(err);
    }
}

export const getTweets=async (req,res)=>{
    try{
        const response = await getTweetsService();
        return successResponse(response,'Tweets fetched successfully');
    }catch(err){
        return errorResponse(err);
    }
}

export const getTweetById=async (req,res)=>{
    try{
        const response = await getTweetByIdService(req.params.id);
        if(!response){
            return res.status(404).json({
                success:false,
                message:'Tweet not found'
            });
        }
        return successResponse(response,'Tweet fetched successfully');
    }catch(err){
        return errorResponse(err);
    }
}

export const deleteTweetById=async (req,res)=>{
    try{
        const response = await deleteTweetByIdService(req.params.id);
        return successResponse(response,'Tweet deleted successfully');
    }catch(err){
        return errorResponse(err);
    }
}

export const updateTweetById=async (req,res)=>{
    try{
        const response = await updateTweetByIdService(req.params.id,req.body);
        return successResponse(response,'Tweet updated successfully');
    }catch(err){
        return errorResponse(err);
    }
}