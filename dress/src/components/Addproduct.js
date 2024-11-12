// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import axios from 'axios'







export default function Addproduct() {

  const[state,setstate]= useState({
   name :'',
   description:'',
   price:'',
  image:'',
  category_name:'',
  shop_id:localStorage.getItem('shop_id')

    
})
console.log(state);

const[errorMessage,setErrorMessage]=useState({})

console.log(errorMessage);


    console.log(state);



const inputChange=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
  setstate({...state,[name]:value})
     


}


const validate=()=>{
 const error = {}

 if (state.name=='') {
     error.name = 'enter product_name'
 }
 if (state.description=='') {
     error.description = 'enter Description'
 }
 if (state.price=='') {
     error.price = 'enter Price'
 }
//  if (state.product_Image_URL=='') {
//      error.product_Image_URL= 'enter Product Image URL'
//  }

 if (state.category_name=='') {
  error.category_name= 'enter category_name'
}


 
 setErrorMessage(error)

 return Object.keys(error).length == 0


}

const submit=(event)=> {
  event.preventDefault()
if(!validate()){
  console.log('error');
  
}

const data = new FormData()

data.append('name',state.name)
data.append('description',state.description)
data.append('price',state.price)
data.append('image',state.image)
data.append('category_name',state.category_name)
data.append('shop_id',state.shop_id)



axios.post('http://127.0.0.1:8000/add_product_api/',data).then((response)=>{
  console.log('response==>',response);

}).catch((error)=>{
  console.log('error==>',error);
}) 


console.log ('hai');
  
} 







  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">DNK</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">everthing</Nav.Link>
          <Nav.Link href="#pricing">women   </Nav.Link>
          <Nav.Link href="#pricing">men  </Nav.Link>
          
          <NavDropdown title="accessories" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">about</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            contact us
          </Nav.Link>
          <Nav.Link href="#deets">$0.00</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>






      <Container fluid className="my-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="card p-4">
              <h3 className="text-center">Add Product</h3>
              <Form>
                <Form.Group controlId="formProductName">
                  <Form.Label  style={{color:errorMessage.name ? 'red' :''}} >{errorMessage.name ? errorMessage.name : 'productname'}Product Name</Form.Label>
                  <Form.Control type="text"  name="name"  placeholder="Enter product name" onChange={inputChange} />
                </Form.Group>

                <Form.Group controlId="formProductDescription">
                  <Form.Label  style={{color:errorMessage.username ? 'red' :''}} >{errorMessage.description ? errorMessage.description : 'name'}description</Form.Label>
                  <Form.Control as="textarea"  name="description" rows={3} placeholder="Enter product description" onChange={inputChange}  />
                </Form.Group>

                <Form.Group controlId="formProductPrice">
                  <Form.Label style={{color:errorMessage.username ? 'red' :''}} >{errorMessage.price ? errorMessage.price : 'price'}Price</Form.Label>
                  <Form.Control type="number" name="price"   placeholder="Enter product price" onChange={inputChange}  />
                </Form.Group>

                <Form.Group controlId="formProductPrice">
                  <Form.Label style={{color:errorMessage.username ? 'red' :''}} >{errorMessage.category_name ? errorMessage.category_name : ''}category_name</Form.Label>
                  <Form.Control type="text" name="category_name"   placeholder="Enter category_name" onChange={inputChange}  />
                </Form.Group>

                <Form.Group controlId="formProductPrice">
                  <Form.Label style={{color:errorMessage.username ? 'red' :''}} >{errorMessage.category_name ? errorMessage.category_name : ''}image</Form.Label>
                  <Form.Control type="file" name="image"   onChange={(event)=>{ setstate({...state,image:event.target.files[0]})}}  />
                </Form.Group>


                
                
{/*                 
                <Form.Group controlId="formProductImage">
                  <Form.Label style={{color:errorMessage.username ? 'red' :''}} >{errorMessage.Product_Image_URL ? errorMessage.Product_Image_URL : 'Product_Image_URL'}Product Image URL</Form.Label>
                  <Form.Control type="text" name="product_image_url"  placeholder="Enter image URL" onChange={inputChange}  />
                </Form.Group> */}

                <Button variant="success" type="submit" className="w-100 mt-3" onClick={submit}>
                  Add Product
                </Button>
               
              </Form>
            </div>
          </Col>
        </Row>
      </Container>









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
  
  <button style={{backgroundColor:"blue",color:"white"}}  type="button" onClick={submit} >SUBSCRIBE</button>
  
</section>
</div>

</footer>

    </div>
  )
}

