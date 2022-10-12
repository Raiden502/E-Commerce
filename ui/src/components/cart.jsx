import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom";
const logo = require('../imgfiles/samsung.jpeg')

function Cart(){
    let navigate = useNavigate()
    const [users, setUsers] = useState({})
    
    let data= {
      "username":sessionStorage.getItem("id")
    }
    const fetchData =()=>{
        fetch(`http://localhost:3001/cart/`,{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>setUsers(data.message))
    }
    useEffect(()=>{
      fetchData()
    },[])
    const conte=()=>{
        var price = 0
        var item=0
        for(let i=0;i<users.length;i++){
            price+=parseInt(users[i].product_info.price)
            item+=1
        }
        sessionStorage.setItem("cost",price.toString())
        sessionStorage.setItem("item",item.toString())
    }
    conte()
    return(
        <div className="Cart">
            <div className="container overflow-hidden text-center py-3">
            <div className="row">
                <div className="col-8 mx-3 my-4" style={{backgroundColor:'rgba(245,237,220,1)',borderRadius:'10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <div className="container text-center">
                    <div className="row pb-5">
                    {
                    users.length > 0 &&(
                        users.map(user =>
                            <div className="col-4 mt-5">
                            <div key = {user._id} className="card" style={{width:'15rem', backgroundColor:'rgba(233,69,96,1)',border:'5px solid black',borderRadius:'10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                                <img src={logo} className="card-img-top"></img>
                                <div className="card-body">
                                <div className="col">
                                    <div className="row">
                                        <h5 className="card-title" style={{color:'white'}}>{user.product_name +" "+ user.model}</h5>
                                    </div>
                                    <div className="row">
                                        <p className="card-text"style={{color:'white'}} >{"rupee "+user.product_info.price}</p>
                                    </div>
                                    <div className="row mx-3 my-3">
                                        <button type="button" onClick={()=>{
                                            navigate(`/display/${user._id}`,{replace:true})
                                            }} 
                                            className="btn btn-dark">Buy now
                                        </button>
                                    </div>
                                    <div className="row mx-3">
                                    <button type="button" onClick={()=>{
                                    let data={
                                        "username":sessionStorage.getItem("id"),
                                        "productId":user._id
                                    }
                                    fetch(`http://localhost:3001/delCart/`,{
                                        method:"POST",
                                        headers:{'Content-Type': 'application/json'},
                                        body:JSON.stringify(data)
                                    })
                                    window.location.reload()               
                                    }}
                                        className="btn btn-dark">Delete item</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        )
                    )
                    }
                    </div>
                </div>
                </div>
                <div className="col my-4">
                    <div className="row" style={{backgroundColor:'rgba(0,0,0,1)',borderRadius:'10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <div className="col my-5 mx-4" style={{backgroundColor:'rgba(256,256,256,0.5)',borderRadius:'10px'}}>
                            <p className="h3 my-3 pt-5" style={{color:'white'}}>Cart items</p>
                            <p className="h6 my-3 " style={{color:'white'}}>{"total items : "+sessionStorage.getItem("item")}</p>
                            <p className="h6 my-3" style={{color:'white'}}>{"total cost : "+sessionStorage.getItem("cost")}</p>
                            <button type="button" className="btn btn-warning my-4" onClick={()=>{
                                console.log("place order")
                            }}>Place order</button>
                        </div> 
                    </div>
                    <div className="row my-4" style={{backgroundColor:'rgba(0,0,0,1)',height:"60%",borderRadius:'10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        
                    </div>  
                </div>
            </div>
            </div>
        </div>
    )
}

export default Cart