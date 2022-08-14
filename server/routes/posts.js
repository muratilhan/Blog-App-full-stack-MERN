const express = require('express');
const bcrypt = require('bcrypt');
const Post = require('../models/Post');
const router = express.Router();


// Create a new POST
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    }catch(err){
        res.status(400).json(err);
    }
})

// Update a Post
router.put('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    try{
        if(post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                $set:req.body
                
            },{new:true})
            res.status(200).json(updatedPost)
            }catch(err){
                res.status(400).json(err)
            }
        }else{
            res.status(400).json("You can update only your post !")
        }
    }catch(err){
        res.status(400).json(err);
    }
})

// Delete a Post
router.delete('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    try{
        if(post.username === req.body.username){    
            try{
                await post.delete();
                res.status(200).json("Post has been deleted")
            }catch(err){
                res.status(400).json(err)
            }
        }else{
            res.status(400).json("You can delete only your post !")
        }
    }catch(err){
        res.status(400).json(err);
    }
})

// Get a single Post
router.get('/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(400).json(err);
    }

})

// GET all Posts !
router.get('/',async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await Post.find({username}).sort({createdAt:-1})
        }else if(catName){
            posts = await Post.find({categories:{$in:[catName]}}).sort({createdAt:-1})
        }else{
            posts = await Post.find({}).sort({createdAt:-1})
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(400).json(err);
    }
})  


module.exports = router