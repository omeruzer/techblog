const Article = require('../models/Article')
const slugify = require('slugify')
const mongoose = require('mongoose')

const add = (req,res)=>{
    new Article(
        {
            title:req.body.title,
            slug:slugify(req.body.title),
            content:req.body.content,
            author:req.body.author,
            category:req.body.category,
        }
    ).save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)            
        }); 
}

const all = (req,res)=>{
    Article.aggregate([
        {
            $lookup:{
                from:'categories',
                foreignField:'_id',
                localField:'category',
                as:'category'
            },
        },  
        {
            $lookup:{
                from:'authors',
                foreignField:'_id',
                localField:'author',
                as:'author'
            },
        },  

    ]).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
        
    });
}

const get = (req,res)=>{
    const id = req.params.id

    Article.aggregate([
        {
            $match: {
                _id: mongoose.Types.ObjectId(id)
            }
        },
        {
            $lookup:{
                from:'categories',
                foreignField:'_id',
                localField:'category',
                as:'category'
            },
        },  
        {
            $lookup:{
                from:'authors',
                foreignField:'_id',
                localField:'author',
                as:'author'
            },
        },  

    ]).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
        
    });

}

const update = (req,res)=>{
    const id = req.params.id

    Article.findByIdAndUpdate(id,req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

const deleted = (req,res)=>{
    const id = req.params.id

    Article.findByIdAndRemove(id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

module.exports={
    add,
    all,
    get,
    update,
    deleted
}