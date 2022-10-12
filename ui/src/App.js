import {BrowserRouter, Routes , Route} from "react-router-dom";
import './App.css';
import Dashboard from "./components/dashboard"
import Search from "./components/searchResult"
import Header from "./components/header"
import Header2 from "./components/header2.0"
import Footer from "./components/footer"
import Display from "./components/display"
import Cart from "./components/cart"
import UserLogin from "./components/userlogin"
import NewUser from "./components/newuser"
import SellerLogin from "./components/sellersignin"
import NewAdmin from "./components/newadmin"
import NewProduct from "./components/addproduct";
import Order from "./components/order";
import Showorder from "./components/showorder";
import OrderAdmin from "./components/orderadmin";
import ShowUserAdmin from "./components/showusersadmin";


function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<><Header /><Dashboard /><Footer /></>}></Route>
            <Route path='/search' element={<><Header /><Search /><Footer /></>}></Route>
            <Route path='/display/:id' element={<><Header /><Display /><Footer /></>}></Route>
            <Route path='/cart' element={<><Header /><Cart /><Footer /></>}></Route>
            <Route path = '/userLogin' element={<UserLogin/>}></Route>
            <Route path = '/newUser' element={<NewUser/>}></Route>
            <Route path = '/newAdmin' element={<NewAdmin/>}></Route>
            <Route path = '/sellerLogin' element={<SellerLogin/>}></Route>
            <Route path = '/adminDash' element={<><Header2 /><Dashboard /><Footer /></>}></Route>
            <Route path = '/newProduct' element={<><Header2 /><NewProduct /><Footer /></>}></Route>
            <Route path = '/order/:id' element={<><Header /><Order /><Footer /></>}></Route>
            <Route path = '/showorders' element={<><Header /><Showorder /><Footer /></>}></Route>
            <Route path = '/userorders' element={<><Header2 /><OrderAdmin /><Footer /></>}></Route>
            <Route path = '/showusers' element={<><Header2 /><ShowUserAdmin /><Footer /></>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
