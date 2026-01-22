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