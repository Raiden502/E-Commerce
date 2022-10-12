import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
function UserLogin(){
    let navigate = useNavigate();
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const handleOnChange=(event)=>{
        if(event.target.name === 'username'){
          setUserName(event.target.value)
        }
        else{
          setPassword(event.target.value)
        }
      }
      const handleOnSubmit=(event)=>{
        event.preventDefault()
        let data={
          "username":userName,
          "password":password
        }
        console.log(data)
        fetch("http://localhost:3001/login/",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.message){
              sessionStorage.setItem("token",`${data.tokenid}`)
            sessionStorage.setItem("id",`${userName}`)
            navigate("/",{replace:true})
            }
            else{
              window.alert("user invalid")
              window.location.reload()
            }
        })
      
    }
    return(
        <div className="user-login d-flex d-flex justify-content-center">
              <div className="d-flex d-flex justify-content-center py-5" style={{backgroundColor:'rgba(245,237,220,1)',marginTop:'10%',borderRadius:'10px',width:"25%", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                  <form>
                  <div class="mb-3">
                      <label className="form-label"><h1>Pilla Amazon</h1></label>  
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Username</label>
                      <input type="text" name="username" onChange={handleOnChange} class="form-control"></input>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Password</label>
                      <input type="password" name="password" onChange={handleOnChange} class="form-control"></input>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={handleOnSubmit}>Submit</button>
                  </form>
              </div>
          </div>
    )
}
export default UserLogin