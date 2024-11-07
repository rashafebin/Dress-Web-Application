
import { Card, Button } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import Navigationbar from './Navigationbar';
import React, {  useEffect, useState } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




    export default function PlaceOrder() {
        const [myOrder, setMyOrder] = useState([]);

        console.log("myOrder====>", myOrder);

        useEffect(() => {
            const login_id = JSON.parse(localStorage.getItem('login_id'));

            axios.get(`http://127.0.0.1:8000/view_orders_api/${login_id}/`)
                .then((response) => {
                    console.log(response);
                    setMyOrder(response.data.data);
                })
                .catch((error) => {
                    console.error("There was an error fetching the orders:", error);
                });
        }, []);

        return (
            <div>
                <Navigationbar />


                <h2 style={{ color: 'black' }} className="text-center">My Orders</h2>
                {myOrder.map((value, index) => (
                    <div className="product-card">
                        <Row className="justify-content-center">
                            <Col md={6} sm={12}>
                                <Card className="border-0 shadow p-3 mb-9 bg-white rounded">
                                    <Row>
                                        <Col md={6} sm={12} className="image-section">
                                            <img
                                                src={value.product.image}
                                                alt="Shop"
                                            />
                                        </Col>
                                        <Col md={6} sm={12} className="details-section">
                                            <Card.Body>
                                                <Card.Title className="brand-name">{value.product.name}</Card.Title>
                                                <br />
                                                <br />
                                                <Card.Subtitle className="product-name"></Card.Subtitle>
                                                <div className="rating"></div>
                                                <Card.Text className="price">
                                                    <span><b>RS:  {value.product.price}</b></span>
                                                </Card.Text>
                                                <Card.Text className="price">
                                                    <span><b>Quantity:  {value.quantity}</b></span>
                                                </Card.Text>
                                                <Card.Text className="Date And Time">
                                                    <span><b>{value.order_date}</b></span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </div>


                ))}
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
    











