const express = require('express');
const Category = require('../models/Category');
const Post = require('../models/Post');
const router = express.Router();

router.post('/', async (req, res) => {
    const newCat = await new Category(req.body);
    try{
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    }catch(err){
        res.status(400).json(err);
    }
})

router.get('/', async (req, res) => {
    try{
        const categories = await Category.find({});
        res.status(200).json(categories);
    }catch(err){
        res.status(400).json(err);
    }
})


module.exports = router