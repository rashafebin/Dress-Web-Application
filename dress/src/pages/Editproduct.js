import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
// import './editproduct.css'; 
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Navigationbar from '../components/Navigationbar';

export default function EditProduct() {
  const [input, setInput] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    image: '',
    shop_id: localStorage.getItem('shop_id')
  });
  
  console.log(input);

  const { id } = useParams();
  const navigate = useNavigate();
  const [shop, setShop] = useState({});
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    const product_id = JSON.parse(localStorage.getItem('product_id'));
    console.log(product_id);
    
    
    axios.post(`http://127.0.0.1:8000/view_single_shop_product/${product_id}`)
      .then((response) => {
        console.log(response);
        // setShop(response.data.data);
        
        setInput({
          name: response.data.data.name,
          description: response.data.data.description,
          price: response.data.data.price,
          quantity: response.data.data.quantity,
          image: response.data.data.image,
        });
      })
      .catch((error) => {
        console.error("Error fetching product details", error);
      });
  }, [id]);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const submit = (event) => {
    event.preventDefault();
    
    if (!validate()) {
      return console.log('Validation error');
    }

    const data = new FormData();
    data.append('name', input.name);
    data.append('description', input.description);
    data.append('price', input.price);
    data.append('quantity', input.quantity);

    if (input.image instanceof File) {
      data.append('image', input.image);
    }

    data.append('product_id', id);  

    axios.post('http://127.0.0.1:8000/update_single_shop_product/', data)
      .then((response) => {
        console.log('Response:', response);
        toast.success('Product updated successfully');
        navigate('/');  
      })
      .catch((error) => {
        console.error('Error updating product:', error);
        toast.error('Error updating product');  
      });
  };

  const validate = () => {
    const error = {};
    
    if (input.name === '') {
      error.name = 'Enter the product name';
    }
    if (input.description === '') {
      error.description = 'Enter the product description';
    }
    if (input.price === '') {
      error.price = 'Enter the product price';
    }
    if (input.quantity === '') {
      error.quantity = 'Enter the product quantity';
    }
    if (input.image === '') {
      error.image = 'Choose an image';
    }

    setErrorMessage(error);
    return Object.keys(error).length === 0;  
  };

  return (
    <div className="edit-product-page">
     <Navigationbar />
   
      <Toaster />
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="card p-4 shadow-lg">
              <h3 className="text-center mb-4">Edit Product</h3>
              <Form onSubmit={submit}>
                <Form.Group controlId="formProductName">
                  <Form.Label className={errorMessage.name ? 'text-danger' : ''}>
                    {errorMessage.name || 'Product Name'}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name"
                    name="name"
                    value={input.name}
                    onChange={inputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formProductDescription">
                  <Form.Label className={errorMessage.description ? 'text-danger' : ''}>
                    {errorMessage.description || 'Description'}
                  </Form.Label>
                  <Form.Control
                    as="textarea" 
                    rows={3}
                    placeholder="Enter product description"
                    name="description"
                    value={input.description}
                    onChange={inputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formProductPrice">
                  <Form.Label className={errorMessage.price ? 'text-danger' : ''}>
                    {errorMessage.price || 'Price'}
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter product price"
                    name="price"
                    value={input.price}
                    onChange={inputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formProductQuantity">
                  <Form.Label className={errorMessage.quantity ? 'text-danger' : ''}>
                    {errorMessage.quantity || 'Quantity'}
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter quantity"
                    name="quantity"
                    value={input.quantity}
                    onChange={inputChange}
                  />
                </Form.Group>

                <Form.Group controlId="formProductImage">
                  <Form.Label className={errorMessage.image ? 'text-danger' : ''}>
                    {errorMessage.image || 'Product Image'}
                  </Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={(event) => setInput({ ...input, image: event.target.files[0] })}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Update Product
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    
    </div>
  );
}
