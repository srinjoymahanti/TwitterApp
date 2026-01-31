import mongoose, { mongo } from "mongoose";

export const createTweetManualValidator=(req,res,next)=>{
    if(!req.body.tweet){
        return res.status(400).json({
            error: 'Content is required'
        });
    }

    if(req.body.tweet.length>280){
        return res.status(400).json({
            error: 'Content exceeds maximum length of 280 characters'
        });
    }

    next();
}

export const getTweetByIdManuelValidator=(req,res,next)=>{
    const isValidId=mongoose.Types.ObjectId.isValid(req.params.id);
    if(!isValidId){
        return res.status(400).json({
            error: 'Invalid tweet ID'
        });
    }
    next();
}