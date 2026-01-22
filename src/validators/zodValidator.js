import { success } from "zod";

export const validate=(schema)=>{//the function takes schema from tweetZodSchema.js
    return async(req,res,next)=>{
        try{
            console.log(req.body);
            schema.parse(req.body);
            next();
        }catch(err){
            return res.status(400).json({
                error: err.errors,
                success: false,
                message: "Validation Error"
            });
        }
    }//it returns a middleware function
}