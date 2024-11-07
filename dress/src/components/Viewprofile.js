
import React, { useEffect, useState } from 'react'
import './viewprofile.css'
import Container from 'react-bootstrap/Container';
import Navigationbar from './Navigationbar';
import axios from 'axios';
import Login from '../pages/Login';




export default function Viewprofile() {
  const [shopdetails, setshopdetails] = useState({})



  useEffect(() => {
    const shop_id = localStorage.getItem('shop_id')
    const user_id = localStorage.getItem('user_id')
    const role = localStorage.getItem('role')
    console.log(shop_id, user_id);

    if (role == 'shop') {
      axios.get(`http://127.0.0.1:8000/shop_view_profile_api/${shop_id}`)
        .then(response => {
          console.log(response);

          setshopdetails(response.data.data);
        })
        .catch(error => {
          console.error("Error fetching shop details with shop_id:", error);
        });
    } else if (role == 'user') {
      axios.get(`http://127.0.0.1:8000/view_user_profile_api/${user_id}`)
        .then(response => {
          console.log(response);

          setshopdetails(response.data.data);
        })
        .catch(error => {
          console.error("Error fetching shop details with user_id:", error);
        });
    } else {
      console.error("No valid ID found in local storage.");
    }




  }, [])

  return (
    <div>
      <Navigationbar />



      <div className="profile-container">
        <image
          src="./assets/"
          roundedCircle
          fluid
          className='mb-4'
        ></image>
        <h1 className="profile-name"></h1>
        <div className="profile-info">
          <p>{shopdetails.shop_name} </p>
          <p>{shopdetails.email} </p>
          <p>{shopdetails.password} </p>
          <p>{shopdetails.address} </p>
          <p>{shopdetails.phone_number} </p>



        </div>
      </div>




      <footer className="product-footer">


        <section className="footer-line">
          <h1>DNK</h1>
          <h3 style={{ marginLeft: "550px" }}> The best look anytime anywhere</h3>
        </section>

        <div className="footer-container">
          <section className="footer-links">
            <h4>For Her</h4>
            <br></br>
            <ul>
              <li><a href="/products">women jeans</a></li>
              <li><a href="/new-arrivals">tops and shirts</a></li>
              <li><a href="/best-sellers">women jackets</a></li>
              <li><a href="/sale">heels and flats</a></li>
              <li><a href="/sale">women accessories</a></li>
            </ul>
          </section>

          <section className="footer-support">
            <h4>For Him </h4>
            <br></br>
            <ul>
              <li><a href="/contact">men jeans</a></li>
              <li><a href="/faq">men shirts</a></li>
              <li><a href="/returns">men shoes</a></li>
              <li><a href="/shipping">men accesseries</a></li>
              <li><a href="/shipping">men jackets</a></li>
            </ul>
          </section>

          <section className="footer-social">
            <h4>subscribe</h4>
            <br></br>
            <button>your email address...</button>
            <br></br>
            <br></br>

            <button style={{ backgroundColor: "blue", color: "white" }}>SUBSCRIBE</button>
          </section>
        </div>

      </footer>
    </div>
  )
}
