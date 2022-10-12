import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom";
const logo = require('../imgfiles/samsung.jpeg');


function Display(){
    let paramas = useParams()
    let navigate = useNavigate()
    const [users, setUsers] = useState([])
    const fetchData =()=>{
        fetch(`http://localhost:3001/display/${paramas.id}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
        })
        .then(res=>res.json())
        .then(data=>setUsers(data))
    }
     useEffect(()=>{
      fetchData()
    },[])

    return(
            <div className="row my-lg-5">
             <div className="col pe-5 ps-5">
                <div className="row pt-5 pb-5" style={{borderRadius:'10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <div className="col-xl-5 col-lg-auto" style={{borderRadius:'10px'}}>  
                        <img src={logo} style={{width:"20rem",borderRadius:'10px',marginTop:'20%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}></img>
                    </div>
                <div className="col-xl-5 col-lg-auto ms-xl-4 ms-md-auto" style={{borderRadius:'10px'}}>
                   {
                    users.length > 0 &&(
                        users.map(user =>
                        <div key={user._id} className="col" style={{textAlign:'left'}}>
                            <h3 className="card-title">
                            {user.product_name+" "+user.model+" ("+user.product_info.color+", "+user.core_info.memory+" Ram, "+
                             user.core_info.storage+" Storage, "+user.core_info.screen_size+" Display)"}</h3>
                             <h6 className="card-text my-2" style={{color:'skyblue'}}>{"Avaliable at "+user.product_info.seller}</h6>
                             <h5 className="card-text py-1" >{"Price: "+user.product_info.price}</h5>
                             <h5 className="card-text py-1" >{"Discount: -"+user.product_info.discount+"%"}</h5>
                             <h5 className="card-text py-1" >{"Total price: "+(parseInt(user.product_info.price)-parseInt(user.product_info.price)*parseInt(user.product_info.discount)/100)}</h5>
                             <ul className="list-group pt-4">
                                <li className="list-group-item  my-1">{"Color: "+user.product_info.color}</li>
                                <li className="list-group-item my-1">{"Brand: "+user.product_name}</li>
                                <li className="list-group-item my-1">{"Model Name: "+user.product_name+" "+user.model}</li>
                                <li className="list-group-item my-1">{"Os: "+user.core_info.os}</li>
                                <li className="list-group-item my-1">{"Storage: "+user.core_info.storage}</li>
                                <li className="list-group-item my-1">{"Cellular Technology:  "+user.core_info.network}</li>
                            </ul>
                            <h4 className="card-text py-4">{"About This item"}</h4>
                            <ul>
                                <li>{user.product_info.description}</li>
                            </ul>
                        </div>             
                        ))
                   }
                </div> 
                </div>
                </div>
             <div className="col-xl-3 ms-xl-1 col-lg-auto ms-lg-auto me-xl-5" style={{backgroundColor:'rgba(0,0,0,0.5)',borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>     
            
                {
                        users.length > 0 &&(
                            users.map(user =>
                                
                                <div key={user._id} className="col ms-5 ps-5" style={{textAlign:'left'}}>
                                {
                                 <div>
                                    <p className="h3 my-3 pt-5 " style={{color:'white'}}>Cart items</p>
                                    <h6 className="card-text my-3" style={{color:'white'}}>{"Total items : 1"}</h6>
                                    <h6 className="card-text my-3" style={{color:'white'}}>{"Price: "+user.product_info.price}</h6>
                                    <h6 className="card-text my-3" style={{color:'white'}}>{"Discount: -"+user.product_info.discount+"%"}</h6>
                                    <h6 className="card-text my-3" style={{color:'white'}}>{"Total price: "+(parseInt(user.product_info.price)-parseInt(user.product_info.price)*parseInt(user.product_info.discount)/100)}</h6>
                                    <button type="button" className="btn btn-warning my-4" onClick={()=>{
                                         if(sessionStorage.getItem("id")){
                                            navigate(`/order/${user._id}`,{replace:true})
                                         }
                                         else{
                                            navigate("/userLogin",{replace:true})
                                         }
                                            
                                    
                                    }}>Place order</button>
                                    <br></br>
                                     <button type="button" onClick={()=>{
                                      if(sessionStorage.getItem("id")){
                                        let data={
                                          "username":sessionStorage.getItem("id"),
                                          "productId":user._id
                                      }
                                      fetch(`http://localhost:3001/addCart/`,{
                                          method:"POST",
                                          headers:{'Content-Type': 'application/json'},
                                          body:JSON.stringify(data)
                                      })}
                                      else{
                                        navigate("/userLogin",{replace:true})
                                      }}
                                      }
                                        className="btn btn-dark">Add to cart
                                    </button>
                                    </div>
                                        
                                }
                                </div>
                        ))}
                    </div>
                </div>
    )
}
export default Display