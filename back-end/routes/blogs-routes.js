const express = require('express'),
     router = express.Router()

//* Model
const Blogs = require('../model/Blogs')


//TODO Routes
//* GET blog
router.route('/').get(async(req,res,next)=>{
     try {
          let result = await Blogs.find()
          res.status(200).json({success:true, message:'Successfully find',result:result})     
     } 
     catch (error) {
          console.log(error.message)
          return next(error.message)
     } 
})

//*Create blog
router.route('/create-blogs').post(async(req,res,next)=>{
     const {name,author,image} = req.body
     try {
          let result = await Blogs.create({name:name,author:author,image:image})     
          res.status(200).json({success:true,message:'Successfully created',result:result})
     } 
     catch (error) {
          console.log(error.message)
          return next(error.message)
     }
})

//* Edit Get :id blogs
router.route('/edit-blogs/:id').get(async(req,res,next)=>{
     let id = req.params.id
     try {
          let result = await Blogs.findById(id)
          res.status(200).json({success:true, message:'Successfully find ID'+id,result:result})     
     } 
     catch (error) {
          console.log(error.message)
          return next(error.message)
     }
})

//*Update blog
router.route('/update-blogs/:id').put(async(req,res, next)=>{
     let id = req.params.id
     try {
          let result = await Blogs.findByIdAndUpdate({_id:id},{
               $set:{
                    name:req.body.name,
                    author:req.body.author,
                    image:req.body.image
               }},{
                    new:true
               })
          res.status(200).json({success:true, message:'Successfully updated',result:result})
     } 
     catch (error) {
          console.log(error.message)
          return next(error.message)
     }
})

//* Delete blog
router.route('/delete-blogs/:id').delete(async(req,res, next)=>{
     let id  = req.params.id
     try {
          let result = await Blogs.findByIdAndDelete(id)
          res.status(200).json({success:true, message:'Successfully Deleted',result:result})     
     } 
     catch (error) {
          console.log(error.message)
          return next(error.message)
     }
})

module.exports = router