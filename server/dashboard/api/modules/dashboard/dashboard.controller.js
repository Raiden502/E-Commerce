const connect = require('../../../DBconnection').getConnection();

const getResult =(req,res)=>{  
    const collection  = connect.db.collection("productinfos");
    collection.find().toArray(function(err, data){
        res.status(201).send(data);
    });
}

const getResultbyId=(req,res)=>{
    const collection  = connect.db.collection("productinfos");
    collection.find({$or: [{"model":req.body.model},{"product_name":req.body.name}]}).toArray(function(err, data){
        res.status(201).send(data);
    });
}

const filterResult=(req,res)=>{
    const collection  = connect.db.collection("productinfos");
    collection.find({$or: [{"product_info.series":req.body.series},{"product_info.price":{$gt:req.body.price}},{"core_info.storage":req.body.storage},{"core_info.memory":req.body.memory},{"product_info.color":req.body.color},{"product_name":req.body.name}]}).toArray(function(err, data){
        res.status(201).send(data);
    });
}

const selected=(req,res)=>{
    let id = req.params.id
    console.log(id)
    const collection  = connect.db.collection("productinfos");
    collection.find({"_id":id}).toArray(function(err, data){
        res.status(201).send(data);
    });
}


module.exports={
    getResult,
    getResultbyId,
    filterResult,
    selected
}