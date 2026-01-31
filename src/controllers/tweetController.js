import { createTweet as createTweetService,
    getTweets as getTweetsService,
getTweetById as getTweetByIdService,
deleteTweetById as deleteTweetByIdService 
} from "../services/tweetService.js";



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

export const getTweets=async (req,res)=>{
    try{
        const response = await getTweetsService();
        return res.status(200).json({
            success:true,
            message:'Tweets fetched successfully',
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

export const getTweetById=async (req,res)=>{
    try{
        const response = await getTweetByIdService(req.params.id);
        if(!response){
            return res.status(404).json({
                success:false,
                message:'Tweet not found'
            });
        }
        return res.status(200).json({
            success:true,
            message:'Tweet fetched successfully',
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

export const deleteTweetById=async (req,res)=>{
    try{
        const response = await deleteTweetByIdService(req.params.id);
        return res.status(200).json({
            success:true,
            message:'Tweet deleted successfully',
            data:response
        })
    }catch(err){
        console.log(err);
        if(err.status){
            return res.status(err.status).json({
                message:err.message,
                success:false
            });
        }
        return res.status(500).json({
            message:'Internal server error',
            success:false
        });
    }
}