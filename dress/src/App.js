import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Registration from './pages/Registration';
import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import Viewproduct from './components/Viewproduct';
import Addproduct from './components/Addproduct';
import Viewprofile from './components/Viewprofile';
import Singleviewproduct from './components/Singleviewproduct';




import Shopregistration from './components/Shopregistration';
import Cartdress from './components/Cartdress';
import Wishlist from './components/Wishlist';
import Placeorder from './components/Placeorder';
import Payment from './components/Payment';
import Userprofile from './components/Userprofile';
import Viewuserprofile from './components/Viewuserprofile';
import Shopprofile from './components/Shopprofile';
import Editprofile from './pages/Editprofile';
import Editshopprofile from './pages/Editshopprofile';
import Shopownproduct from './pages/Shopownproduct';
import EditProduct from './pages/Editproduct';
import Shopaddproduct from './pages/Shopaddproduct';



function App() {
  return (
   

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/navigationbar' element={<Navigationbar/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/viewproduct' element={<Viewproduct/>}/>
        <Route path='/addproduct' element={< Addproduct/>}/>
        <Route path='/viewprofile' element={< Viewprofile/>}/>
        <Route path='/singleviewproduct/:id' element={< Singleviewproduct/>}/>
        <Route path='/shopregistration' element={<Shopregistration/>}/>
        <Route path='/cartdress' element={<Cartdress/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/placeorder' element={<Placeorder/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/userprofile' element={<Userprofile/>}/>
        <Route path='/viewuserprofile' element={<Viewuserprofile/>}/>
        <Route path='/shopprofile' element={<Shopprofile/>}/>
        <Route path='/editprofile' element={<Editprofile/>}/>
        <Route path='/editshopprofile/:id' element={<Editshopprofile/>}/>
        <Route path='/shopownproduct' element={<Shopownproduct/>}/>
        <Route path='/editproduct' element={<EditProduct/>}/>
        <Route path='/shopaddproduct' element={<Shopaddproduct/>}/>
       
        


      </Routes>
    </BrowserRouter>
  );
}

export default App;
