
const userDao = require('./user_Dao')

const getUser=(req, res)=>{
    userDao.alluser((err,response)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(response)
    })
}

const User=(req, res)=>{
    userDao.singleuser(req.body,(err,response)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(response)
    })
}


const newUser = (req,res)=>{
    let user = req.body
    userDao.newUser(user,(err,response)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(response)
    })

}

const addCartItem=(req,res)=>{
    let newcart = req.body
    console.log(newcart)
    userDao.addCart(newcart,(err,response)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(response)
    })
}

const deleteCartItem=(req,res)=>{
    let newcart = req.body
    userDao.deleteCart(newcart,(err,response)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(response)
    })
}

const getCartItem = (req,res)=>{
    let newcart = req.body
    console.log(newcart)
    userDao.getCart(newcart,(err,response)=>{
        if(err) res.status(500).send(err)
        else res.status(200).send(response)
    })
}

const login=(req,res)=>{
    let user = req.body
    userDao.loginUser(user)
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}

const UpdateHistory=()=>{

}


module.exports={
    getUser,
    newUser,
    addCartItem,
    deleteCartItem,
    getCartItem,
    login,
    UpdateHistory,
    User
}