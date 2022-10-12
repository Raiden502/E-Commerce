import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom";
const logo = require('../imgfiles/samsung.jpeg');

function Order(){
    let paramas = useParams()
    let navigate = useNavigate()
    const [prod, setProd] = useState([])
    const [users, setUsers] = useState([])
    let data={
        "username":sessionStorage.getItem('id')
    }
    const fetchData =()=>{
        fetch(`http://localhost:3001/display/${paramas.id}`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
        })
        .then(res=>res.json())
        .then(data=>setProd(data))
    }
    const fetchuser =()=>{
        fetch(`http://localhost:3001/show/`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>setUsers([data.message]))
    }
    useEffect(()=>{
        fetchData()
      },[])
    useEffect(()=>{
        fetchuser()
    },[])

    const [type, paymenttype] = useState("")
    const [address, addressty] = useState("")

    const handleOnChange=(event)=>{
        if(event.target.name === 'address'){
          addressty(event.target.value)
        }
        if(event.target.name === '1' ||event.target.name === '2' ){
          paymenttype(event.target.value)
        }
      }
    const handleOnSubmit=(event)=>{
        event.preventDefault()
        let data={
          "username":sessionStorage.getItem('id'),
          "productId":paramas.id,
          "paymentType":type,
          "address":address,
        }
        fetch("http://localhost:3001/addOrder/",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                navigate("/",{replace:true})
            }
            else{
                window.alert("cannot place order")
                window.location.reload()
            }
        })
    }
    return(
        <div className="order">
            <div className="row">
                <div className="col m-lg-5" style={{borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                {
                    prod.length > 0 &&(
                        prod.map(user =>
                        <div key={user._id} className="col p-5" style={{textAlign:'center'}}>
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
                        </div>             
                        ))
                   }
                </div>
                <div className="col m-lg-5" style={{borderRadius:'10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                {
                    users.length > 0 &&(
                        users.map(user =>
                        <div key={user.name} className="col p-5">
                            <form>
                            <div className="mb-3">
                            <label className="form-label"><h1>Pilla Amazon</h1></label>  
                            </div>
                            <div className="form-outline mb-4">
                            <label className="form-label">Name</label>
                            <input type="text" placeholder={user.name} className="form-control" disabled/>
                            </div> 
                            <div className="form-outline mb-4">
                            <label className="form-label">email</label>
                            <input type="text" placeholder={user.email} className="form-control" disabled/>
                            </div> 
                            <div className="form-outline mb-4">
                            <label className="form-label">Phone number</label>
                            <input type="text" placeholder={user.phone} className="form-control" disabled />
                            </div> 
                            <div className="form-outline mb-4">
                            <label className="form-label">Address line 1</label>
                            <input type="text" placeholder={user.address} className="form-control" disabled />
                            </div> 
                            <div className="form-outline mb-4">
                            <label className="form-label">Address line 2</label>
                            <input type="text" name="address" placeholder="Address line" onChange={handleOnChange} className="form-control"/>
                            </div> 
                            <div className="form-outline mb-4">
                            <label className="form-label pe-4">Payment Type</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="1" onChange={handleOnChange} value="online" />
                                    <label className="form-check-label">online</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="2" onChange={handleOnChange} value="offline" />
                                    <label className="form-check-label">offline</label>
                                </div>
                            </div>
                            <button type="button" className="btn btn-warning my-4" onClick={handleOnSubmit}>Place order</button>
                            <button type="button" className="btn btn-warning my-4" onClick={()=>{
                                         navigate(`/display/${paramas.id}`,{replace:true})
                                    }}>Cancel order</button>
                        </form> 
                        </div>             
                        ))
                   }
                    
                </div>
            </div>
        </div>
            
    )
}

export default Order