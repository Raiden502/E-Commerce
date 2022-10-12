import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom";
function OrderAdmin(){
    let navigate = useNavigate()
    const [users, setUsers] = useState([])
    const fetchData =()=>{
        fetch("http://localhost:3001/getOrders/")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    }
    useEffect(()=>{
      fetchData()
    },[])
    
    return(
        <div className="order-admin">
            <div className="container mt-5">
                <div className="row border border-5 border-dark" style={{borderRadius:"15px"}}>
                    <div className="col border-end pt-3">
                        <p className="fw-bold text-uppercase fs-6">User Name</p>
                    </div>
                    <div className="col border-end pt-3">
                        <p className="fw-bold text-uppercase fs-6">Product Id</p>
                    </div>
                    <div className="col border-end pt-3">
                        <p className="fw-bold text-uppercase fs-6">Order Id</p>
                    </div>
                    <div className="col border-end pt-3">
                        <p className="fw-bold text-uppercase fs-6">Payment Id</p>
                    </div>
                    <div className="col border-end pt-3">
                        <p className="fw-bold text-uppercase fs-6">Payment Type</p>
                    </div>
                    <div className="col pt-3">
                        <p className="fw-bold text-uppercase fs-6">Address</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
            {
                users.map(user=>
                    
                        <div className="row border border-5 border-dark mt-1 text-center" style={{borderRadius:"15px"}}>
                            <div className="col border-end pt-3">
                                <p>{user.userId}</p>
                            </div>
                            <div className="col border-end pt-3">
                                <p>{user.productId}</p>
                            </div>
                            <div className="col border-end pt-3">
                                <p>{user.orderId}</p>
                            </div>
                            <div className="col border-end pt-3">
                                <p>{user.paymentId}</p>
                            </div>
                            <div className="col border-end pt-3">
                                <p>{user.paymentType}</p>
                            </div>
                            <div className="col pt-3">
                                <p>{user.address}</p>
                            </div>
                        </div>
                    )
            }
            </div>
        </div>
    )

}

export default OrderAdmin