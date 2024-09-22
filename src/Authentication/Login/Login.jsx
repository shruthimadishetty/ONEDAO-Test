import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Login.scss'; 
import img from '../../assets/register_image.png'

const Login = () => {
  return (
    <Container fluid className="login-page">
      <Row className="login-container">
        <Col md={6} className="image-side d-none d-md-flex">
          <img
            src={img} 
            alt="Login Visual"
            className="login-image"
          />
        </Col>
        <Col xs={12} md={6} className="form-side">
          <h3>Log In to Admin Panel</h3>
          <p>Enter your email id and password below</p>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>EMAIL ID</Form.Label>
              <Form.Control type="email" placeholder="Enter your email id" className='login-control-form'/>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" className='login-control-form'/>
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              Log In
            </Button>

            <p className="mt-3 text-center">
              Don't have an account? <a href="/">Register</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
