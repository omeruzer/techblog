const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Categories',CategorySchema)