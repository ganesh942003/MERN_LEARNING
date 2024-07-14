const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
require('dotenv').config()
require('./helpers/init_mongodb')
const { verifyAccessToken } = require('./helpers/jwt_helper')
require('./helpers/init_redis')

const AuthRoute = require('./Routes/Auth.route')
const dashboard=require('./Routes/Admin.route')
const app = express()
const cors=require('cors')
app.use(cors())

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/get', async (req, res, next) => {
  
  res.redirect(301,'/login')
  
  

})

app.get('/login', async (req, res, next) => {
  res.send('Hello login.')
  
  

})


app.use('/auth', AuthRoute)
app.use('/dashboard',(req,res,next)=>{
  req.role="admin"
  next()
},dashboard)

app.use(async (req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  console.log("error call")
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
