const joi=require('joi')

const documentlist=joi.object({
    id:joi.string().required(),
    content:joi.array().required()
})