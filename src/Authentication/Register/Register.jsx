import React from 'react';
import './Register.scss';
import { Container, Form, Button } from 'react-bootstrap';
import img from '../../assets/register_image.png'

const Register = () => {
  return (
    <Container fluid className="register-page">
      <div className="register-container">
        <div className="image-side">
          <img src={img} alt="Register" className="register-image" />
        </div>
        <div className="form-side">
          <h3>Register to Admin Panel</h3>
          <p>Enter your phone number and password below</p>
          <Form>
            <Form.Group>
              <Form.Label>EMAIL ID</Form.Label>
              <Form.Control type="email" placeholder="Enter your email ID" />
            </Form.Group>
            <Form.Group>
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Form.Group>
              <Form.Label>CONFIRM PASSWORD</Form.Label>
              <Form.Control type="password" placeholder="Enter your confirm password" />
            </Form.Group>
            <Button type="submit">Register</Button>
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Register;
