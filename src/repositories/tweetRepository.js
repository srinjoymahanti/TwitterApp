import Tweet from "../schema/tweet.js";

export const createTweet = async ({body})=>{
    try{
        const tweet = await Tweet.create({body});
        return tweet;
    }catch(err){
        console.log("Error creating tweet", err);
        throw err;
    }
}

export const getTweets = async ()=>{
    try{
        const tweets = await Tweet.find();// latest first
        return tweets;
    }catch(err){
        console.log("Error fetching tweets", err);
        throw err;
    }
}

export const getTweetById = async (id)=>{
    try{
        const tweet = await Tweet.findById(id);
        return tweet;
    }catch(err){
        console.log("Error fetching tweet by id", err);
        throw err;
    }
}

export const deleteTweetById = async (id)=>{
    try{
        const tweet = await Tweet.findByIdAndDelete(id);
        return tweet;
    }catch(err){
        console.log("Error deleting tweet by id", err);
        throw err;
    }
}

export const updateTweetById = async (id,body)=>{
    try{
        const tweet = await Tweet.findByIdAndUpdate(id,body,{new:true});
        return tweet;
    }catch(err){
        console.log("Error updating tweet by id", err);
        throw err;
    }
}