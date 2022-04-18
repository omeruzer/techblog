const { default: mongoose } = require('mongoose');
const Author = require('../models/Author')

const add = (req,res)=>{
    new Author(req.body).save()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)            
        }); 
}

const all = (req,res)=>{
    Author.aggregate([
        {
            $lookup:{
                from:'articles',
                foreignField:'author',
                localField:'_id',
                as:'articles'
            }
        }
    ])
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

const get = (req,res)=>{
    const id = req.params.id

    Author.aggregate([
        {
            $match:{
                _id:mongoose.Types.ObjectId(id)
            }
        },
        {
            $lookup:{
                from:'articles',
                foreignField:'author',
                localField:'_id',
                as:'articles'
            }
        }
    ])
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)            
        });
}

const update = (req,res)=>{
    const id = req.params.id

    Author.findByIdAndUpdate(id,req.body)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
}

const deleted = (req,res)=>{
    const id = req.params.id

    Author.findByIdAndRemove(id)
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