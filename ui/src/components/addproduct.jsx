import React, {useState} from "react"
import { useNavigate } from "react-router-dom";

function NewProduct(){
    let navigate = useNavigate();
    const [category, seta] = useState("")
    const [name, setb] = useState("")
    const [model, setc] = useState("")
    const [series, setd] = useState("")
    const [price, sete] = useState("")
    const [seller, setf] = useState("")
    const [discount, setg] = useState("")
    const [description, seth] = useState("")
    const [color, seti] = useState("")
    const [os, setj] = useState("")
    const [memory, setk] = useState("")
    const [storage, setl] = useState("")
    const [network, setm] = useState("")
    const [processor, setn] = useState("")
    const [wifi, seto] = useState("")
    const [bluetooth, setp] = useState("")
    const [power_supply, setq] = useState("")
    const [screen_size, setr] = useState("")
    const handleOnChange=(event)=>{
        if(event.target.name === 'category'){
          seta(event.target.value)
        }
        else if(event.target.name === "name"){
            setb(event.target.value)
        }
        else if(event.target.name === "model"){
            setc(event.target.value)
        }
        else if(event.target.name === "series" ){
            setd(event.target.value)
        }
        else if(event.target.name === "price"){
            sete(event.target.value)
        }
        else if(event.target.name === "seller"){
            setf(event.target.value)
        }
        else if(event.target.name === "discount"){
            setg(event.target.value)
        } 
        else if(event.target.name === "description"){
            seth(event.target.value)
        } 
        else if(event.target.name === "color"){
            seti(event.target.value)
        }
        else if(event.target.name === "os"){
            setj(event.target.value)
        } 
        else if(event.target.name === "memory" ){
            setk(event.target.value)
        } 
        else if(event.target.name === "storage"){
            setl(event.target.value)
        } 
        else if(event.target.name === "network" ){
            setm(event.target.value)
        } 
        else if(event.target.name === "processor" ){
            setn(event.target.value)
        } 
        else if(event.target.name === "wifi" ){
            seto(event.target.value)
        } 
        else if(event.target.name === "bluetooth"){
            setp(event.target.value)
        } 
        else if(event.target.name === "power"){
            setq(event.target.value)
        }
        else{
            setr(event.target.value)
        }
      }
      const handleOnSubmit=(event)=>{
        event.preventDefault()
        let data={
            "username":sessionStorage.getItem('id'),
            "category" : category,
            "name" : name,
            "model" : model,
            "series" : series,
            "price" : price,
            "seller": seller,
            "discount" : discount,
            "description" : description,
            "color" : color,
            "os": os,
            "memory" : memory,
            "storage" : storage,
            "network" : network,
            "processor" : processor,
            "wifi" : wifi,
            "bluetooth": bluetooth,
            "power_supply": power_supply,
            "screen_size": screen_size,
        }
        console.log(data)
        fetch("http://localhost:3001/addProduct/",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            window.location.reload()
        })
      
    }
    return(
        <div className="add-Product d-flex d-flex justify-content-center">
            <div className="d-flex d-flex justify-content-center py-5" style={{backgroundColor:'rgba(245,237,220,1)',marginTop:'5%',borderRadius:'10px',width:"40%", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <form>
            <div class="mb-3">
                      <label className="form-label"><h1>Pilla Amazon</h1></label>  
                    </div>
                <div className="form-outline mb-4">
                            <input type="text" name="category" onChange={handleOnChange} className="form-control" />
                            <label className="form-label">Category</label>
                        </div> 

                        <div className="form-outline mb-4">
                            <input type="text" name="name" onChange={handleOnChange} className="form-control" />
                            <label className="form-label">Name</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" name="model" onChange={handleOnChange} className="form-control" />
                            <label className="form-label">Model</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" name="series" onChange={handleOnChange} className="form-control" />
                            <label className="form-label">Series</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" name="price" onChange={handleOnChange} className="form-control" />
                            <label className="form-label">Price</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text"name="seller" onChange={handleOnChange}  className="form-control" />
                            <label className="form-label">Seller</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" name="discount" onChange={handleOnChange}className="form-control" />
                            <label className="form-label">Discount</label>
                        </div>

                    
                        <div className="form-outline mb-4">
                            <input type="text" name="description" onChange={handleOnChange}className="form-control" />
                            <label className="form-label">Description</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" name="color" onChange={handleOnChange}className="form-control" />
                            <label className="form-label">Color</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" name="os" onChange={handleOnChange}className="form-control" />
                            <label className="form-label">Os</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" name="memory" onChange={handleOnChange}className="form-control" />
                            <label className="form-label">Memory</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" name="storage" onChange={handleOnChange}className="form-control" />
                            <label className="form-label">Storage</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" name="network" onChange={handleOnChange}className="form-control" />
                            <label className="form-label">Network</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" name="processor" onChange={handleOnChange}className="form-control" />
                            <label className="form-label">Processor</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" name="wifi" onChange={handleOnChange}className="form-control" />
                            <label className="form-label">Wifi</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" name="bluetooth" onChange={handleOnChange}className="form-control" />
                            <label className="form-label">Bluetooth</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" name="power" onChange={handleOnChange}className="form-control" />
                            <label className="form-label">Power_supply</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" name="screen_size" onChange={handleOnChange}className="form-control" />
                            <label className="form-label">Screen_size</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-3" onClick={handleOnSubmit}>Sign in</button>
                    </form>

            </div>
        </div>
    )
}

export default NewProduct