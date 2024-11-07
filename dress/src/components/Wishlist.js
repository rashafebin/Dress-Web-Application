// import React from 'react'
import { Card, Button } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import Navigationbar from './Navigationbar';
import React, {  useEffect, useState } from 'react';
import axios from 'axios';

import { Toaster, toast } from 'react-hot-toast';


export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    dressWishlist();
  }, []);

  const dressWishlist = () => {
    const login_id = JSON.parse(localStorage.getItem('login_id'));
    axios.get(`http://127.0.0.1:8000/view_data/${login_id}`)

      .then((response) => {
        console.log(response);
        
        setWishlist(response.data.wishlist);  
      })
      .catch((error) => {
        console.error('Error fetching wishlist:', error);
        toast.error('Failed to load wishlist');
      });
  };

  const cartProduct = (id) => {
    const data = {
      login_id: JSON.parse(localStorage.getItem('login_id')),
      product_id: id,
    };
    axios.post(`http://127.0.0.1:8000/add_cart_api/`, data)
      .then((res) => {
        console.log(res.data.message);
        toast.success(res.data.message);
        dressWishlist();  
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
        toast.error('Error adding product to cart');
      });
  };

  return(
    <div>
      <Navigationbar />
      <Toaster />
      <div className="container mt-5">
        <h2 style={{color:'black'}} className="text-center">Your Wishlist</h2>

        <div className="row">
          {wishlist?.length > 0 ? (
            wishlist.map((value, index) => (      
              <div className="col-md-4 mb-4" key={index}>
                <Card style={{ width: '100%' }}>
                  <Card.Img
                    variant="top"
                    src={value.product_details.image}
                    alt={value.product_details.name}
                  />
                  <Card.Body>
                    <Card.Title>{value.product_details.name}</Card.Title>
                    <Card.Title>{value.product_details.name}</Card.Title>
                    <Card.Text>Rs. {value.product_details.price}</Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => cartProduct(value.product_id)}  
                    >
                      Add To Cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <div className="text-center">No items in your wishlist</div>
          )}
        </div>
      </div>

    
    
     <br></br>





    
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

  );
};
