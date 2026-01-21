import express from 'express';

const router = express.Router();// create a router object

router.get('/',(req,res)=>{//hit when request made to /api/v1/tweets
    return res.json({
        message: 'Get all tweets for v2'
    });
})

router.get('/:id',(req,res)=>{//hit when request made to /api/v1/tweets/:id
    return res.json({
        message: `Get tweet with id ${req.params.id}`
    });
});

export default router;// export the router object