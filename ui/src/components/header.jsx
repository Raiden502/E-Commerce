import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom';

function Header() {
    let navigate = useNavigate();
    const [Name, setName] = useState({})
    const handleOnChange=(event)=>{
        if(event.target.name === 'searchbox'){
          setName({value:event.target.value})
      }
    }
    const Search=()=>{
      localStorage.setItem("item",Name.value)
      navigate("/search",{replace:true})
    }

    return(
        <div className="header">
            <nav className="navbar navbar-expand-lg bg-dark py-3">
                <div className="container-fluid">
                    <label className="navbar-brand text-warning ms-5 mx-3">Pilla Amazon</label>
                    <form className="container-fluid mx-5" role="search">
                    <div className="input-group">
                    <input className="form-control me-2" type="search" name = "searchbox" onChange={handleOnChange} placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-success" type="submit" onClick={Search}>Search</button>
                    </div>
                    </form>
                    <div className="collapse navbar-collapse me-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle active text-white mx-3" data-bs-toggle="dropdown" aria-expanded="false" to="/">{"Account"}</Link>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li><Link className="dropdown-item text-white" to="/userLogin">Login in</Link></li>
                                            <li><Link className="dropdown-item text-white" to="/newUser">New user</Link></li>
                                            <li><Link className="dropdown-item text-white" to="/showorders" >Orders</Link></li>
                                            <li><Link className="dropdown-item text-white" to="/sellerLogin">Seller sign in</Link></li>
                                            <li><Link className="dropdown-item text-white" to="/" onClick={()=>{
                                                sessionStorage.clear()
                                            }}>Log out</Link></li>
                                        </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white mx-3" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white mx-3" to="/cart">Cart</Link>
                            </li>
                            
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default Header