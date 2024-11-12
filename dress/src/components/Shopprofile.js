import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Image, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Navigationbar from './Navigationbar';


export default function Shopprofile() {
    const [shop, setShop] = useState({});
    const navigate=useNavigate()
    console.log(shop);
    
    useEffect(() => {
        const login_id = JSON.parse(localStorage.getItem('login_id'));
        
        axios.get(`http://127.0.0.1:8000/view_shop_profile_api/${login_id}`)
            .then((response) => {
                
                setShop(response.data);
            })
            .catch((error) => {
                console.error("Error fetching shop profile", error);
            });
    }, []);
     const editShop=(shop_id)=>{
      navigate(`/editshopprofile/${shop_id }`)
     }
    
    return (
        <div>
           <Navigationbar /> 
    
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Card>
                            <Card.Body className="text-center">
                                {shop?.image ? (
                                    <Image 
                                        src={shop.image}
                                        roundedCircle
                                        fluid
                                        className="mb-4 shop-image"
                                        style={{height:'200px',width:'200px'}}
                                        alt="Shop Image"
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                                <Card.Title>{shop?.shop_name}</Card.Title>
                                <Card.Text>{shop?.address}</Card.Text>
                                <Card.Text>{shop?.email}</Card.Text>
                                <Card.Text>{shop?.phone_number}</Card.Text>
                                
                               
                                    <Button variant="primary" className="mt-2"  onClick={()=>{editShop(shop.login_id)}}>Edit Profile</Button>
                              
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    
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
}