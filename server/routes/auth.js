const express = require('express');
const User = require('../models/User')
const bcrypt = require('bcrypt');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    try{
        hashedPassword = await bcrypt.hash(req.body.password,10)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        const user = await newUser.save();
        res.status(200).json(user)
    }catch(err){
        res.status(400).json(err);
    }
})

router.post('/login', async (req, res) => {
    try{    
        const user = await User.findOne({username:req.body.username})
        !user && res.status(400).json("Not available")

        const validate = await bcrypt.compare(req.body.password,user.password);
        !validate && res.status(400).json("Wrong password")

        return res.status(200).json(user)

    }catch(err){
        return res.status(400).json(err)
    }
})





router.get('/users', async (req, res) => {
    const users = await User.find({}).sort({createdAt:-1}) // son eklenen workout'u en başa alır
    res.status(200).json(users)
})

module.exports = router