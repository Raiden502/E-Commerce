import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom";
function ShowUserAdmin(){
    let navigate = useNavigate()
    const [users, setUsers] = useState([])
    const fetchData =()=>{
        fetch("http://localhost:3001/allUser/")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    }
    useEffect(()=>{
      fetchData()
    },[])
    return(
        <div className="show-user-admin">
            <div className="container mt-5">
                <div className="row border border-5 border-dark" style={{borderRadius:"15px"}}>
                    <div className="col border-end pt-3">
                        <p className="fw-bold text-uppercase fs-6">User Name</p>
                    </div>
                    <div className="col border-end pt-3">
                        <p className="fw-bold text-uppercase fs-6">Name</p>
                    </div>
                    <div className="col border-end pt-3">
                        <p className="fw-bold text-uppercase fs-6">Email</p>
                    </div>
                    <div className="col border-end pt-3">
                        <p className="fw-bold text-uppercase fs-6">Phone Number</p>
                    </div>
                    <div className="col pt-3">
                        <p className="fw-bold text-uppercase fs-6">Address</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
            {
                users.map(user=>              
                        <div key={user.username} className="row border border-5 border-dark mt-1 text-center" style={{borderRadius:"15px"}}>
                            <div className="col border-end pt-3">
                                <p>{user.username}</p>
                            </div>
                            <div className="col border-end pt-3">
                                <p>{user.name}</p>
                            </div>
                            <div className="col border-end pt-3">
                                <p>{user.email}</p>
                            </div>
                            <div className="col border-end pt-3">
                                <p>{user.phoneno}</p>
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

export default ShowUserAdmin