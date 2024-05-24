import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UserNav from './UserNav';
import backgroundImg from './Assets/pharma.jpeg'; 

const Home = () => {
  return (
    <div style={{ backgroundImage:`url(${backgroundImg})` , backgroundSize: 'cover', minHeight: '100vh',opacity: 0.9}}>
      <UserNav />
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="display-4 fw-bold text-white">Welcome to MedWorld</h1>
            <p className="lead text-white">Your one-stop solution for all medical needs</p>
            <Button variant="primary" size="lg" className="mt-3">Get Started</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;