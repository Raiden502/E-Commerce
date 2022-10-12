import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom";

const logo = require('../imgfiles/samsung.jpeg');
const img1 = require('../imgfiles/1.jpeg')
const img2 = require('../imgfiles/2.jpeg')
const img3 = require('../imgfiles/3.jpeg')

function Dashboard(){
    let navigate = useNavigate()
    const [users, setUsers] = useState([])
    const fetchData =()=>{
        fetch("http://localhost:3001/home/")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className="Dashboard" style={{backgroundColor:'rgba(245,237,220,1)'}}>
            <div className="container text-center py-5">
            <div id="carouselExampleIndicators" className="carousel slide mx-1 pt-2" data-bs-ride="true">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner" style={{borderRadius:'15px',boxShadow: '0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 7px 21px 0 rgba(0, 0, 0, 0.19)'}}>
                <div className="carousel-item active">
                  <img src={img1} className="d-block w-100 h-50" alt="..." style={{borderRadius:'15px'}}></img>
                </div>
                <div className="carousel-item">
                  <img src={img3} className="d-block w-100" alt="..." style={{borderRadius:'15px'}}></img>
                </div>
                <div className="carousel-item">
                  <img src={img1} className="d-block w-100" alt="..." style={{borderRadius:'15px'}}></img>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="row">
            {
                users.length > 0 &&(
                users.map(user =>
                <div key = {user._id} className="col-3 mt-5">
                    <div key = {user._id} className="card" style={{width:'15rem', backgroundColor:'rgba(233,69,96,1)',border:'5px solid black',borderRadius:'10px',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <img src={logo} className="card-img-top" style={{borderBottom:'5px solid black'}}></img>
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
                              </div>
                          </div>
                      </div>
                  </div>
                )
              )}
          </div>
      </div>
      </div>
    )
}
export default Dashboard