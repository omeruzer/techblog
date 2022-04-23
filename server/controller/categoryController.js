const Category = require('../models/Category')
const slugify = require('slugify');
const mongoose = require('mongoose')

const add = (req,res)=>{
    new Category({
        title:req.body.title,
        slug:slugify(req.body.title),

    }).save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)            
        }); 
}

const all = (req,res)=>{
    Category.aggregate([
        {
            $lookup:{
                from:'articles',
                foreignField:'category',
                localField:'_id',
                as:'articles'
            }
        },
        {
            $unwind: {
                path:'$articles',
                preserveNullAndEmptyArrays:true,
            }
        },
        {
            $group:{
                _id:{
                    _id:'$_id',
                    title:'$title',
                    slug:'$slug'
                },
                articles:{
                    $push:'$articles'
                }
            }
        },
        {
            $project:{
                _id:'$_id._id',
                title:'$_id.title',
                slug:'$_id.slug',
                articles:'$articles'
            }
        },    
    ])
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

const get = (req,res)=>{
    const id = req.params.id

    Category.aggregate([
        {
            $match: {
                _id: mongoose.Types.ObjectId(id)
            }
        },
        {
            $lookup:{
                from:'articles',
                foreignField:'category',
                localField:'_id',
                as:'articles'
            }
        },
        {
            $unwind: {
                path:'$articles',
                preserveNullAndEmptyArrays:true,
            }
        },
        {
            $group:{
                _id:{
                    _id:'$_id',
                    title:'$title',
                    slug:'$slug'
                },
                articles:{
                    $push:'$articles'
                }
            }
        },
        {
            $project:{
                _id:'$_id._id',
                title:'$_id.title',
                slug:'$_id.slug',
                articles:'$articles'
            }
        },    
    ])
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)            
        });
}

const update = (req,res)=>{
    const id = req.params.id

    Category.findByIdAndUpdate(id,req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

const deleted = (req,res)=>{
    const id = req.params.id

    Category.findByIdAndRemove(id)
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