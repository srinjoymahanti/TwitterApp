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

export const createTweet=(req,res)=>{
    return res.json({
        message: 'Create a new tweet'
    });
}