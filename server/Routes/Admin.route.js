const express=require('express')
const controller=require('../Controllers/Admin.Controller')

const document=require('../Models/Docment.model')
const router=express.Router()
router.post('/admin/:id',controller.dashboard)
router.get('/object',async(req,res,next)=>{
    try{
        const data =await document.find()
        res.send(data)
    }
    catch(err){
        next(err)
    }
    
})
router.post('/object',async(req,res,next)=>{
    const body=req.body
  const data=  new document(body)
  const saveddata=await data.save()

res.send(saveddata)
})

module.exports= router