const express = require('express')
const router = express.Router()

const AuthController = require('../Controllers/Auth.Controller')
const jwthelper=require('../helpers/jwt_helper')
router.post('/register', AuthController.register)

router.post('/login', AuthController.login)

router.get('/test',jwthelper.verifyAccessToken,AuthController.test)
router.post('/refresh-token', AuthController.refreshToken)

router.delete('/logout', AuthController.logout)

module.exports = router
