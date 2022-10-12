let bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const authConfig = require('../../../config');
const comparePassword = (givenPw,savePw,cb) =>{
    bcrypt.compare(givenPw,savePw,(err,isMatch) => {
        if(err) cb(err)
        cb(null,isMatch)
    })
}

const generateToken = (payload, done)=>{
    jwt.sign(payload,'jwtforNote',{expiresIn:'1h'},done)
}

const verifyToken = (token,done)=>{
    jwt.verify(token,'jwtforNote',done);
}

const isAuthorized=(req,next)=>{
    const authHeader = req.get('Authorization')
    if(!authHeader){
        next(null,{isAuthorized:false})
    }
    verifyToken(token,(err,resp)=>{
        if(err){
            next(err)
        }
        else{
            next(null,{isAuthorized:true})
        }
    })
}

module.exports = {
    comparePassword,
    generateToken,
    verifyToken,
    isAuthorized,
}