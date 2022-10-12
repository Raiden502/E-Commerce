const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    details:{
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        phoneno:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        dob:{
            type: String,
            required: true
        }
    },
    cart:{
        productId:[],
        
    },
    history:{
        orderId:[]
    },

})

userSchema.pre("save",function(next){
    let user = this
    if(this.isModified('password')|| this.isNew){
        bcrypt.genSalt(10,function(err,salt){
            if(err){
                next(err)
            }
            bcrypt.hash(user.password,salt,function(err,hash){
                if(err){
                    next(err)
                }
                user.password = hash
                next()
            })
        })
    }
    else{
        next()
    }
})
module.exports= mongoose.model('userData',userSchema)