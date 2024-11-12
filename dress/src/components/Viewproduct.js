import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import {  Button } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigationbar from './Navigationbar';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast'
import { useSelector,useDispatch  } from 'react-redux';
import { getproducts } from '../redux/Slice.js/Productslice';



export default function Viewproduct() {

const viewproducts=useSelector(state=>state.products.viewproducts)
console.log(viewproducts);

const dispatch = useDispatch();         

  const navigate =useNavigate()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([true]);
 console.log(products)

  useEffect(() => {

    dispatch(getproducts())
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/view_product_api/');
        // setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();  

   
  }, []);

  const singleproduct = (id) => {
    navigate(`/singleviewproduct/${id}`);
  };

  const Wishlist = async (id) => {
    const wishlistData = {
      login_id: JSON.parse(localStorage.getItem('login_id')),
      product_id: id,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/add_wishlist_api/', wishlistData);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error adding to wishlist');
    }
  };

  const Cart = async (id) => {
    const cartData = {
      user_id: JSON.parse(localStorage.getItem('login_id')),
      product_id: id,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/add_cart_api/', cartData);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error adding to cart');
    }
  };


  return (
    <div>
      <Navigationbar/>
      <Toaster/>

      <div><h1>Featured Products</h1></div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container className='box'>
      <Row>
        {products.map((value, index) => (
          <Col key={index} xs={{ order: 5 }}>
            <div>
              <img
                className='img-hover'
                src={value.image}
                alt={value.name}
                style={{ height: "200px", width: "200px" }}
                onClick={() => { singleproduct(value.id) }}
              />
              <p onClick={() => { singleproduct(value.id) }}>{value.name}</p>
              <p>{value.price}</p>
              <p>{value.description}</p>
              <p>{value.category_name}</p>

              <Button variant="primary" onClick={() => { Cart(value.id) }}> 
                <FaShoppingCart style={{ marginRight: '5px' }} />
                
              </Button> 

              <Button variant="danger" onClick={() => { Wishlist(value.id) }}>
                <FaHeart style={{ marginRight: '5px' }} />
                
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
      <footer className="product-footer" style={{ backgroundColor: 'black', color: 'white' }}>
        <section className="footer-line">
          <h1>DNK</h1>
          <h3 style={{ marginLeft: "550px" }}>The best look anytime anywhere</h3>
        </section>

        <div className="footer-container">
          <section className="footer-links">
            <h4>For Her</h4>
            <ul>
              <li><a href="/products" style={{ color: 'white' }}>Women Jeans</a></li>
              <li><a href="/new-arrivals" style={{ color: 'white' }}>Tops and Shirts</a></li>
              <li><a href="/best-sellers" style={{ color: 'white' }}>Women Jackets</a></li>
              <li><a href="/sale" style={{ color: 'white' }}>Heels and Flats</a></li>
              <li><a href="/sale" style={{ color: 'white' }}>Women Accessories</a></li>
            </ul>
          </section>

          <section className="footer-support">
            <h4>For Him</h4>
            <ul>
              <li><a href="/contact" style={{ color: 'white' }}>Men Jeans</a></li>
              <li><a href="/faq" style={{ color: 'white' }}>Men Shirts</a></li>
              <li><a href="/returns" style={{ color: 'white' }}>Men Shoes</a></li>
              <li><a href="/shipping" style={{ color: 'white' }}>Men Accessories</a></li>
              <li><a href="/shipping" style={{ color: 'white' }}>Men Jackets</a></li>
            </ul>
          </section>

          <section className="footer-social">
            <h4>Subscribe</h4>
            <button>Enter your email address...</button>
            <button style={{ backgroundColor: "blue", color: "white" }}>SUBSCRIBE</button>
          </section>
        </div>
      </footer>
    </div>
  );
}
