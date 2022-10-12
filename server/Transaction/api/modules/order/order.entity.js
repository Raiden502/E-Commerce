const mongoose = require('mongoose')
const Schema = mongoose.Schema



const userSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    orderId:{
        type: String,
        required: true
    },
    productId:{
        type: String,
        required: true
    },
    address:{
        type: String,
    },
    paymentId:{
        type: String,
        required: true
    },
    paymentType:{
        type: String,
        required: true
    }
})
module.exports= mongoose.model('orderinfo',userSchema)