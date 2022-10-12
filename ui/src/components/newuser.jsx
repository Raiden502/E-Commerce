import React, {useState} from "react"
import { useNavigate } from "react-router-dom";

function NewUser(){
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
        fetch("http://localhost:3001/newUser/",{
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
        <div className="new-user d-flex d-flex justify-content-center">
            <div  className="d-flex d-flex justify-content-center py-5" style={{backgroundColor:'rgba(245,237,220,1)',marginTop:'5%',borderRadius:'10px',width:"50%", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <form>
                <div class="mb-3">
                      <label className="form-label"><h1>Pilla Amazon</h1></label>  
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" onChange={handleOnChange} className="form-control" />
                </div> 

                <div className="form-outline mb-4">
                    <label className="form-label">Username</label>
                    <input type="text" name="username" onChange={handleOnChange} className="form-control" />
                    
                </div>

                        <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                            <input type="email" name="email" onChange={handleOnChange} className="form-control" />
                            
                        </div>

                        <div className="form-outline mb-4">
                        <label className="form-label">Phone number</label>
                            <input type="number" name="phonenumber" onChange={handleOnChange} className="form-control" />
                            
                        </div>

                        <div className="form-outline mb-4">
                        <label className="form-label">Address</label>
                            <input type="text" name="Address" onChange={handleOnChange} className="form-control" />
                            
                        </div>

                        <div className="form-outline mb-4">
                        <label className="form-label">Date of Birth</label>
                            <input type="date"name="dob" onChange={handleOnChange}  className="form-control" />
                            
                        </div>

                        <div className="form-outline mb-4">
                        <label className="form-label">Password</label>
                            <input type="password" name="regpass" onChange={handleOnChange}className="form-control" />
                            
                        </div>

                    
                        <div className="form-outline mb-4">
                        <label className="form-label">Repeat password</label>
                            <input type="password" name="reppass" onChange={handleOnChange}className="form-control" />
                            
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

        </div>
    )
}

export default NewUser