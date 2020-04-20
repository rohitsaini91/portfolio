const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/',async(req,res) => {
    try{
        const posts = await Post.find()
        res.json(posts);
    }
    catch(err){
        res.json({
            message:err
        });
    }
})

router.post('/',async(req,res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    const savedPost = await post.save()
    try{
        res.json(savedPost);
    }
    catch(err){
        res.json({
            message: err
        });
    }

})

module.exports = router;