const productDao = require('./productData_Dao')
const AdminDao = require('./adminInfo_Dao')
const connection = require('../../../DBconnection').getConnection()

const getData = (req, res)=>{
    res.status(201).send("hi admin")
}

const newProduct = (req,res) =>{
    let product = req.body
    console.log(product)
    productDao.saveProductInfo(product,(err,response)=>{
        if(err) res.status(500).send("error in adding product")
        else res.status(201).send(response)
    })

}

// const delProduct=(req,res)=>{
//     let product = req.body
//     console.log(product)
//     productDao.delProduct(product,(err,response)=>{
//         if(err) res.status(500).send("error in deleting product")
//         else res.status(201).send(response)
//     })
    
// }

const deleteuser=(req, res)=>{
    const user = connection.db.collection("userdatas")
    user.deleteOne({username:req.username},(err,response)=>{
        if(err) res.status(500).send("error in deleting user")
        else res.status(200).send(response)
    })
}

const orderDetails=(req, res)=>{
    const order = connection.db.collection("orderinfos")
    order.find().toArray(function(err, data){
        if(err) res.status(500).send("error in getting order details")
        else res.status(201).send(data);
    });
}



const addAdmin = (req,res) =>{
    let admin = req.body
    console.log(admin)
    AdminDao.addAdmin(admin,(err,response)=>{
        if(err) res.status(500).send("error in adding admin")
        else res.status(201).send(response)
    })
}
const login=(req,res)=>{
    let user = req.body
    AdminDao.loginAdmin(user)
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}

module.exports={
    getData,
    newProduct,
    addAdmin,
    login,
    orderDetails,
    deleteuser
}