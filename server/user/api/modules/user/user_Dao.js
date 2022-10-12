const model = require('./userEntity')
const auth = require('../auth');
const connect = require('../../../DBconnection').getConnection();
const newUser=(user,done)=>{
    let userinfo = model()
    userinfo.username = user.username
    userinfo.password = user.password
    userinfo.details.name = user.name
    userinfo.details.email = user.email
    userinfo.details.phoneno = user.phone
    userinfo.details.address = user.address
    userinfo.details.dob = user.dob
    console.log(userinfo)
    userinfo.save((err,response)=>{
        if(err) done(err)
        else done(null,{message:"added user", response:response})
    })
}

const addCart=(newcart,done)=>{
    console.log("new cart",newcart)
    const collection  = connect.db.collection("productinfos");
    collection.findOne({_id:newcart.productId},(err,res)=>{
        if(err) done(err)
        model.updateOne({username:newcart.username},{$push:{'cart.productId':newcart.productId}},(err,response)=>{
            if(err) done(err)
            else done(null,{message:"added cart item", response:response})
        })
    })
}



const deleteCart=(cartdata, done)=>{
    console.log("deletecart",cartdata)
    model.updateOne({username:cartdata.username},{$pull:{'cart.productId':cartdata.productId}},(err,response)=>{
        if(err) done(err)
        else done(null,{message:"deleted cart item", response:response})
    })

}

const alluser=(done)=>{
    model.find({}, function(err, user){
        if(err) {done(err)}
        else {
            var userMap = [];
            user.forEach(function(user) {
            userMap.push({name:user.details.name,username:user.username,email:user.details.email,phoneno:user.details.phoneno,address:user.details.address})
            });
            done(null,userMap)
        }
       
        
    });
}

const singleuser=(user,done)=>{
    model.find({username:user.username},(err, data)=>{
        if(err) done(err)
        else done(null,{message:{name:data[0].details.name,email:data[0].details.email,phone:data[0].details.phoneno,address:data[0].details.address}})
    });
}//}

const getCart=async(cartdata,done)=>{
    console.log("show cart",cartdata)
    let info = connect.db.collection("productinfos");
    let coll = await model.findOne({username:cartdata.username})
    let col = coll.cart.productId
    async function getdetails(col){
        let data = []
        for(i = 0;i<col.length;i++){
            data.push(await info.findOne({_id:col[i]}))
        }
        done(null,{message:data})
    }
    getdetails(col)
}

const loginUser = (userInfo) =>{
    console.log(userInfo)
    return new Promise((resolve,reject) => {
    model.findOne({username:userInfo.username},(err,user) => {
         if(user){
             auth.comparePassword(userInfo.password,user.password,(error,isMatch)=>{
                 if(isMatch && !error){
                    let payload={
                        name:user.details.name,
                    }
                    console.log(isMatch)
                    auth.generateToken(payload,(tokenerror,token)=>{
                        resolve({message:true,tokenid:token}) 
                    })            
                 }
                 else{
                     reject({message:false})
                 }
             })
         }
         else{
             reject({message:false})
         }
    })
 })
 }
module.exports={
    newUser,
    addCart,
    deleteCart,
    getCart,
    loginUser,
    alluser,
    singleuser
}