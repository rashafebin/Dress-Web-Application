import React from 'react'
import Navigationbar from './Navigationbar'
import './home.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Home() {
  return (
    <div>
     < Navigationbar />
     <div className="homepage" >
      <img src="/assets/home_bg.jpg" alt="Description" className="homepage-image" />
      <div className="homepage-content">
        <h1>Raining offers for </h1>
        <h1>hot summer! </h1>
        <h2>25% off on all prtoducts </h2>
        <br></br>
        <br></br>

        <Button variant="primary" size="lg" active>
        shop now
      </Button>{' '}
      <Button variant="secondary" size="lg" active>
        Find more
      </Button>

    
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <Container>
      <Row>
        <Col xs> <img src="/assets/image/col1.jpg" style={{height:"400px", width:"350px"}}  />
        <div className='colum1'>
            <h2>20% Off On Tank Tops</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <p>adipiscing elit. Proin ac dictum.</p>
            <button>shop now</button>
             </div></Col>
      

        <Col xs={{ order: 5 }}><img src="/assets/image/col2.jpg" style={{height:"400px" , width:"350px"}} />
        <div className='colum2'>
        <h2>Latest Eyewear For You</h2>
            <p>Lorem ipLatest Eyewear For You</p>
            <p>adipiscing elit. Proin ac dictum.</p>
            <button>check out</button>
            </div></Col>
        <Col xs={{ order: 0 }}><img src="/assets/image/col3.jpg" style={{height:"400px" ,  width:"350px"}} />
        <div className='colum3'>
        <h2>Let's Lorem Suit Up!</h2>
            <p>Lorem ipLatest Eyewear For You</p>
            <p>adipiscing elit. Proin ac dictum.</p>
            <button>shop now</button>
             
            </div></Col>

      </Row>
    </Container>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>








    <div><h1>featured products</h1></div>
    <Container>
      <Row>
        <Col xs><div><img src="/assets/image/shose1.jpg" style={{height:"200px" , width:'200'}} />
        <p>DNK Yellow shoes</p>
        <p>$120.00</p>
        </div> </Col>
        <Col xs={{ order: 5 }}><div><img src="/assets/image/shose2.jpg" style={{height:"200px" , width:"200px"}}></img>
        <p>DNK blue shoes</p>
        <p>$200.00-$240.00</p>
        </div></Col>
        <Col xs={{ order: 0 }}><div><img src="/assets/image/pant1.jpg" style={{height:"200px" , width:"200px"}} />
        <p>Dark brown jeans</p>
        <p>$150.00</p>
        </div></Col>
        <Col xs={{ order: 0 }}><div><img src="/assets/image/pant2.jpg" style={{height:"200px" , width:"200px"}} />
        <p>blue denim jeans</p>
        <p>$150.00</p>
        </div></Col>
        <Col xs={{ order: 0 }}><div><img src="/assets/image/pant3.jpg" style={{height:"200px" , width:"200px"}} />
        <p>basic gray jeans</p>
        <p>$150.00</p>
        </div></Col>
      </Row>
    </Container>

    <br></br>
    
    <Container>
      <Row>
        <Col xs><div><img src="/assets/image/product1.jpg" style={{height:"200px" , width:'200'}} />
        <p>blue denim shorts</p>
        <p>$130.00</p>
        </div> </Col>
        <Col xs={{ order: 5 }}><div><img src="/assets/image/product2.jpg" style={{height:"200px" , width:"200px"}}></img>
        <p>Anchor Bracelet</p>
        <p>$150.00-$180.00</p>
        </div></Col>
        <Col xs={{ order: 0 }}><div><img src="/assets/image/product3.jpg" style={{height:"200px" , width:"200px"}} />
        <p>boho bangle bracelet</p>
        <p>$150.00</p>
        </div></Col>
        <Col xs={{ order: 0 }}><div><img src="/assets/image/product4.jpg" style={{height:"200px" , width:"200px"}} />
        <p>light brown purse</p>
        <p>$150.00</p>
        </div></Col>
        <Col xs={{ order: 0 }}><div><img src="/assets/image/product5.jpg" style={{height:"200px" , width:"200px"}} />
        <p>bright red bag</p>
        <p>$150.00</p>
        </div></Col>
      </Row>
    </Container>
    <br></br>


    <div className="page">
      <img src="/assets/image/banner3.jpg" alt="Description" className="page-image" />
      <div className="page-content">
        <p>Limited Time Offer</p>
        <h1>Special Edition </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
        <p>ullamcorper mattis, pulvinar dapibus leo.</p>
        <h2>Buy This T-shirt At 20% Discount, Use Code OFF20
  </h2>
        <br></br>
        <br></br>

        <Button variant="primary" size="lg" active>
        shop now
      </Button>{' '}
    
    </div>
    </div>


    <br></br>
    <br></br>
    <br></br>


<div><h2>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS</h2></div>
<br></br>
<br></br>



        <footer className="product-footer">

        <section className="footer-line">
          <h1>DNK</h1>
          <h3> The best look anytime anywhere</h3>
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
