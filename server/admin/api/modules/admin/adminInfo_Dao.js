const adminmodel = require('./adminInfoEntity');
const auth = require('../auth');
const addAdmin = (adminData,done)=>{
    let newAdmin = adminmodel()
    newAdmin.username = adminData.username
    newAdmin.password = adminData.password
    newAdmin.details.name = adminData.name
    newAdmin.details.email = adminData.email
    newAdmin.details.phoneno = adminData.phone
    newAdmin.details.address = adminData.address
    newAdmin.details.dob = adminData.dob
    console.log("-->",newAdmin)
    newAdmin.save((err,response)=>{
        if(err) done(err)
        else done(null,{message:"admin added",newAdmin:response})
    })
}

const loginAdmin = (userInfo) =>{
    console.log(userInfo)
    return new Promise((resolve,reject) => {
    adminmodel.findOne({username:userInfo.username},(err,user) => {
         if(user){
            console.log(user)
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
            console.log(err)
             reject({message:false})
         }
    })
 })
 }
module.exports = {
    addAdmin,
    loginAdmin
}