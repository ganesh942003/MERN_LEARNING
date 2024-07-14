module.exports={
    dashboard:(req,res,next)=>

    {
        console.log(req.params.id)
        const id=req.params.id
res.send({success:"admin login sucessfully and id is "+id})
    },

    postdata:(req,res,next)=>{
        
    }
}