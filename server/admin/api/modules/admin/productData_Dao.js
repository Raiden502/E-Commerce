const { v4: uuidv4 } = require('uuid');
const productModel = require('./productDataEntity');
const connect = require('../../../DBconnection').getConnection();


const saveProductInfo = (product, done)=>{
    const collection  = connect.db.collection("adminlogins");
    let newProduct = productModel()
    newProduct._id = uuidv4()
    newProduct.category = product.category
    newProduct.product_name  = product.name
    newProduct.model = product.model
    newProduct.product_info.series = product.series
    newProduct.product_info.price = product.price
    newProduct.product_info.seller = product.seller
    newProduct.product_info.discount = product.discount
    newProduct.product_info.description = product.description
    newProduct.product_info.color = product.color
    newProduct.core_info.os  = product.os
    newProduct.core_info.memory = product.memory
    newProduct.core_info.storage = product.storage
    newProduct.core_info.network = product.network
    newProduct.core_info.processor = product.processor
    newProduct.core_info.wifi = product.wifi
    newProduct.core_info.bluetooth = product.bluetooth
    newProduct.core_info.power_supply = product.power_supply
    newProduct.core_info.screen_size = product.screen_size

    collection.updateOne({username:product.username},{$push:{'addedProduct.productId':product.id}},(err,res)=>{
            if(err) done(err)
            else {
                newProduct.save((err,response)=>{  
                    if(err) done(err);
                    else done(null,{dbproductres:response, message:"product is added"});
                });
            }
        })  
    };

// const delProduct = (product,done)=>{
//     productModel.deleteOne({_id:product.id},(err,response)=>{
//         if()
//     })
// }
module.exports = {
    saveProductInfo,
};