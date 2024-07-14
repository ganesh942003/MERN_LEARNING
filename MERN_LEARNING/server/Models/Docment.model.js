
const { string } = require('joi')
const mongoose=require('mongoose')
const Schema=mongoose.Schema

const documentSchema=new Schema({
    username:{
        type:String,
        require:true,
    },
   age:{
        type:Number,
        require:true,
    }
})
const doc=mongoose.model('doc',documentSchema)
module.exports=doc
