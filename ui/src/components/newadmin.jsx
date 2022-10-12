import React, {useState} from "react"
import { useNavigate } from "react-router-dom";

function NewAdmin(){
    let navigate = useNavigate();
    const [Name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [Address, setAddress] = useState("")
    const [dob, setDob] = useState("")
    const [password, setPassword] = useState("")
    const [checkpassword, setcheckPassword] = useState("")
    const handleOnChange=(event)=>{
        if(event.target.name === 'name'){
          setName(event.target.value)
        }
        else if(event.target.name === 'username'){
            setUserName(event.target.value)
        }
        else if(event.target.name === 'email'){
            setEmail(event.target.value)
        }
        else if(event.target.name === 'phonenumber'){
            setPhone(event.target.value)
        }
        else if(event.target.name === 'Address'){
            setAddress(event.target.value)
        }
        else if(event.target.name === 'dob'){
            setDob(event.target.value)
        }
        else if(event.target.name === 'regpass'){
            setPassword(event.target.value)
        }
        else{
            setcheckPassword(event.target.value)
        }
      }
      const handleOnSubmit=(event)=>{
        event.preventDefault()
        let data={
            "username":userName,
            "password":password,
            "name":Name,
            "email":email,
            "phone":phone,
            "address":Address,
            "dob":dob
        }
        console.log(data)
        fetch("http://localhost:3001/newAdmin/",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            navigate("/userLogin",{replace:true})
        })
      
    }
    return(
        <div className="new-user">
            <form>
            <label className="form-label">Pilla Amazon</label>
                <div className="form-outline mb-4">
                            <input type="text" name="name" onChange={handleOnChange} className="form-control" />
                            <label className="form-label">Name</label>
                        </div> 

                        <div className="form-outline mb-4">
                            <input type="text" name="username" onChange={handleOnChange} className="form-control" />
                            <label className="form-label">Username</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="email" name="email" onChange={handleOnChange} className="form-control" />
                            <label className="form-label">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="number" name="phonenumber" onChange={handleOnChange} className="form-control" />
                            <label className="form-label">Phone number</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" name="Address" onChange={handleOnChange} className="form-control" />
                            <label className="form-label">Address</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="date"name="dob" onChange={handleOnChange}  className="form-control" />
                            <label className="form-label">Date of Birth</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" name="regpass" onChange={handleOnChange}className="form-control" />
                            <label className="form-label">Password</label>
                        </div>

                    
                        <div className="form-outline mb-4">
                            <input type="password" name="reppass" onChange={handleOnChange}className="form-control" />
                            <label className="form-label">Repeat password</label>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                            <input className="form-check-input me-2" type="checkbox" value=""/>
                            <label className="form-check-label">
                                I have read and agree to the terms
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-3" onClick={handleOnSubmit}>Sign in</button>
                    </form>

        </div>
    )
}

export default NewAdmin