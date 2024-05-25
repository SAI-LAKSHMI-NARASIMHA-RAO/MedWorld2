import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Products = () => {
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5632/home');
        setProds(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError(error); // Set error state if fetch fails
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Render error message if fetch fails
  }

  const productCards = prods.map((product, index) => (
    <Col key={index} md={4}>
      <Card style={{ marginBottom: '20px' }}>
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title> {/* Change product.name to product.productName */}
          <Card.Text>
            {product.quantity > 0 ? 'Available' : 'Out of Stock'}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price: {product.price}</ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  ));

  const rows = [];
  for (let i = 0; i < productCards.length; i += 3) {
    const row = (
      <Row key={i}>
        {productCards.slice(i, i + 3)}
      </Row>
    );
    rows.push(row);
  }

  return <div>{rows}</div>;
};

export { Products };
