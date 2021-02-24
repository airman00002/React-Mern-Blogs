const mongoose = require('mongoose')

const BlogsSchema = mongoose.Schema({
     name:String,
     author:String,
     image:String,
},{
     timestamps:true
},{
     collection:'blogs'
})

module.exports = mongoose.model('Blogs',BlogsSchema)   