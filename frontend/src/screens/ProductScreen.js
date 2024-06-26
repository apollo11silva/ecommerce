// frontend/src/screens/ProductScreen.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';

import { Link } from 'react-router-dom'; 
import axios from 'axios'

function ProductScreen() {

  const [product, setProduct] = useState({}); 
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct(){

      const { data } = await axios.get(`/api/products/${id}`); 

      setProduct(data)

    }

    fetchProduct();
    
}, [id]);

  return (
    <div>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link> 
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h3>{product.name}</h3>
                </ListGroupItem>

                <ListGroupItem>
                    <Rating value={product.rating} text={`${product.numReviews} ratings`} color={'#f8e825'} />
                </ListGroupItem>

                <ListGroupItem>
                    Price: ${product.price}
                </ListGroupItem>

                <ListGroupItem>
                    Description: ${product.description}
                </ListGroupItem>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                          <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                          {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                      <Button className='btn-block' disabled={product.countInStock === 0} type='button'>Add to Cart</Button>
                  </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
    </div>
  );
}

export default ProductScreen;
