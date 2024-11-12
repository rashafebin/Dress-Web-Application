import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function Shopownproduct() {
  const [view, setView] = useState([]);
  console.log("view==>",view);

  const navigate = useNavigate();
  

  const editing = (id) => {
    navigate('/editproduct/${id}');

  };


  const deleteProduct = (login_id) => {
    axios
      .post(`http://127.0.0.1:8000/delete_single_shop_product${login_id}`)
      .then((response) => {
        console.log('Product deleted successfully:', response);
        setView(view.filter((product) => product.id !== login_id));
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };
   

  useEffect(() => {
    const login_id = JSON.parse(localStorage.getItem('login_id'));
    const data = {
      login_id: login_id,
    };
    console.log('data===>',data);

    axios
      .get(`http://127.0.0.1:8000/view_single_shop_product/${login_id}`)
      .then((response) => {
        console.log('res====>',response);
        setView(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, []);



  return (
    <div>
   
      <div className="product-card">
        <Row className="justify-content-center">
          {view.length   > 0 ? (
            view.map((product) => (
              <Col md={6} sm={12} key={product.id}>
                <Card className="border-0 shadow p-3 mb-9 bg-white rounded">
                  <Row>
                    <Col md={6} sm={12} className="image-section">
                      <img
                        src={product.image}
                        className="img-fluid product-image"
                        alt={product.name}
                      />
                    </Col>
                    <Col md={6} sm={12} className="details-section">
                      <Card.Body>
                        <Card.Title className="brand-name">{product.name}</Card.Title>
                        <Card.Subtitle className="product-name">{product.quantity}</Card.Subtitle>
                        <Card.Text className="price">
                          <span><b>Rs.{product.price}</b></span>
                        </Card.Text>
                        <Card.Text className="description">
                          <span><b>{product.description}</b></span>
                        </Card.Text>
                      </Card.Body>

                      <button
                        className="btn-donate"
                        style={{ width: '60px', height: '20px', marginTop: '20px', marginLeft: '40px', padding: '10px' }}
                        onClick={() => editing(product.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-donate"
                        style={{ width: '60px', height: '20px', marginLeft: '60px', padding: '10px' }}
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))
          ) : (
            <div></div>
          )}
        </Row>
      </div>
   
    </div>
  );
}