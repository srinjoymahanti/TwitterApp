import express from 'express';

const router = express.Router();// create a router object

router.get('/',(req,res)=>{//hit when request made to /api/v1/comments
    return res.json({
        message: 'Get all comments for v2'
    });
})

router.get('/:id',(req,res)=>{//hit when request made to /api/v1/comments/:id
    return res.json({
        message: `Get comments with id ${req.params.id}`
    });
});

export default router;// export the router object