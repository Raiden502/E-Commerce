const model = require('./order.entity')
const connect = require('../../../DBconnection').getConnection();
const { v4: uuidv4 } = require('uuid');


const generateOrder=(order,done)=>{
    let ord = model()
    let id = uuidv4()
    ord.orderId = id
    ord.productId = order.productId
    ord.userId = order.username
    ord.paymentId = uuidv4()
    ord.paymentType = order.paymentType
    ord.address = order.address
    const user = connect.db.collection("userdatas")
    ord.save((err,response)=>{
        if(err){
            done(err)
        } 
        else {
            user.updateOne({username:order.username},{$push:{'history.orderId':id}},(err,response)=>{
                if(err){
                    done(err)
                }
                else{
                    done(null,{message:response})
                }
            })
        }
    })
}

const cancelOrder = (order,done)=>{
    console.log("-->",order)
    const user = connect.db.collection("userdatas")
    user.updateOne({username:order.username},{$pull:{'history.orderId':order.Id}},(err,res)=>{
        if(res){
            model.deleteOne({orderId:order.Id},(err,response)=>{
                if(err) done(err)
                else done(null,{message:response})
            })
        }
        else done(err)
    })
}

const getOrder=(order,done)=>{
    console.log(order)
    model.find({userId:order.username},(err,response)=>{
        if(err) done(err)
        else done(null,{message:response})
    })
}

module.exports={
    cancelOrder,
    getOrder,
    generateOrder
}