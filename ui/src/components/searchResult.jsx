import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom";
const logo = require('../imgfiles/samsung.jpeg');
function Search(){
    let navigate = useNavigate()
    let local = localStorage.getItem('item')
    const [searchresult, searchItem] = useState([])
    let data={
          "model":local,
          "name":""
    }
    
    const fetchCollection =()=>{
        fetch("http://localhost:3001/search/",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>searchItem(data))
    }

    useEffect(()=>{
        fetchCollection()
    },[])
    return (
        <div className="login">
             <h1 className="my-3">{"Search results for "+local}</h1>
            <div className="container text-center pb-5">
            <div className="row">
            {
                searchresult.length > 0 &&(
                    searchresult.map(user =>
                    <div className="col-3 mt-5">
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

export default Search;