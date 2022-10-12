const dao = require('./order.dao')

const placeOrder=(req,res)=>{
    let order = req.body
    console.log(order)
    dao.generateOrder(order,(err,response)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(response)
    })
}

const cancelOrder=(req,res)=>{
    let order = req.body
    dao.cancelOrder(order,(err,response)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(response)
    })
}
const getDetails=(req,res)=>{
    let order = req.body
    dao.getOrder(order,(err,response)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(response)
    })
}

module.exports={
    placeOrder,
    cancelOrder,
    getDetails
}