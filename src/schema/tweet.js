import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true,
        trim:true,// remove leading/trailing spaces
        maxlength:280
    }
})

const Tweet = mongoose.model("Tweet", tweetSchema);// tweets collection

export default Tweet;