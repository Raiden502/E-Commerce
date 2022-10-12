const mongoose = require('mongoose')

const createConnection = ()=>{
    mongoose.connect("mongodb://localhost/ecommerce")
}

const getConnection = ()=>{
    return mongoose.connection
}

const onError=()=>{
    console.log("error in connecting database")
}

const onSuccess=()=>{
    console.log("database connection successfull")
}

module.exports={
    createConnection,
    getConnection,
    onError,
    onSuccess
}