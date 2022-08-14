const express = require('express');
const User = require('../models/User')
const bcrypt = require('bcrypt');
const Post = require('../models/Post')
const router = express.Router();

// UPDATE USERNAME
router.put('/:id', async (req, res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
           req.body.password = await bcrypt.hash(req.body.password,10);
           console.log(req.body._id)
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true});
            res.status(200).json(updatedUser);
        }catch(err){
            res.status(400).json(err);
        }
    }else{
        res.status(400).json("you can update only your account")
    }
})

// DELETE USERNAME
router.delete('/:id', async (req, res) => {
    if(req.body.userId === req.params.id){
        try{
            const user = await User.findById(req.params.id);
            try{
                await Post.deleteMany({username:user.username});
                await User.findByIdAndDelete(req.params.id);         
                res.status(200).json("User has been deleted");
            }catch(err){
                res.status(400).json(err);
            }
        }catch(err){
            console.log("User not found")
        }
    }else{
        res.status(400).json("you can DELETE only your account")
    }
})


module.exports = router