const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Types.ObjectId
    },
    category:{
        type:mongoose.Types.ObjectId
    }
})

module.exports = mongoose.model('articles',ArticleSchema)