import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navigationbar from './Navigationbar';




export default function Singleviewproduct() {

  const {id} = useParams()
  const [product,setProduct]=useState({})



useEffect(()=>{
  
axios.get(`http://127.0.0.1:8000/view_single_product_api/${id}`).then((response)=>{
  setProduct(response.data.data);
 
})
},[id])

  return (
    <div>
       <Navigationbar/>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>



  <Container>
      <Row >
        <Col className='img-hover' style={{width:'400px'}}  xs><div><img src="/assets/image/shose1.jpg" style={{height:"400px" , width:'400'  }}  />
        
        </div> </Col>
        <Col>
        <p>{product?.name}</p>
        
        <p>{product.price}</p>
        
        <button style={{width:'100px'}}>Shop Now</button>

        </Col>
        
        </Row>
    </Container>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

<footer className="product-footer">
        

        <section className="footer-line">
          <h1>DNK</h1>
          <h3 style={{marginLeft:"550px"}}> The best look anytime anywhere</h3>
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
          
          <button style={{backgroundColor:"blue",color:"white"}}>SUBSCRIBE</button>
        </section>
        </div>
        
        </footer>
        

    </div>
  )
}
