import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom";

function Showorder(){
    let navigate = useNavigate();
    const [users, setUsers] = useState([])
    let data={
        "username":sessionStorage.getItem('id')
    }
    const fetchData =()=>{
        fetch(`http://localhost:3001/getOrderDetails/`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>setUsers(data.message))
    }
     useEffect(()=>{
      fetchData()
    },[])
    return(
        <div className="showorder ">  
            {
                users.length > 0 &&(
                users.map(user =>
                <div key = {user._id} className="row-3 m-5">
                    <div key = {user._id} className="card" style={{width:'50rem', backgroundColor:'rgba(233,69,96,1)',border:'5px solid black',borderRadius:'10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <div className="card-body">
                            <div className="col">
                                <div className="row">
                                    <p className="card-text" style={{color:'white'}}>{"Order Id: "+user.orderId}</p>
                                </div>
                                <div className="row">
                                    <p className="card-text"style={{color:'white'}} >{"Payment Id:  "+user.paymentId}</p>
                                </div>
                                <div className="row">
                                    <p className="card-text"style={{color:'white'}} >{"Address:  "+user.address}</p>
                                </div>
                                <div className="row mx-3">
                                    <button type="button" onClick={()=>{
                                        if(sessionStorage.getItem("id")){
                                            let data={
                                            "username":sessionStorage.getItem("id"),
                                            "Id":user.orderId
                                            }
                                            console.log(data)
                                            fetch(`http://localhost:3001/delOrder/`,{
                                                method:"POST",
                                                headers:{'Content-Type': 'application/json'},
                                                body:JSON.stringify(data)
                                            })
                                            .then(data=>{
                                                if(data){
                                                    window.location.reload()
                                                }
                                            })
                                           
                                        }
                                        else{
                                            navigate("/userLogin",{replace:true})
                                        }}
                                    }   
                                    className="btn btn-dark">cancel order
                                    </button>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
                )
              )}
        </div>
    )
}
export default Showorder