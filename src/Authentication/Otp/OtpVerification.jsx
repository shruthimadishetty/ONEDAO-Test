import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtpVerification.scss';
import { Container, Form, Button } from 'react-bootstrap';
import img from '../../assets/register_image.png'; 

const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    navigate("/dashboard");
  };

  return (
    <Container fluid className="otp-page">
      <div className="otp-container">
        <div className="otp-image-side">
          <img src={img} alt="OTP Verification" className="otp-image" />
        </div>
        <div className="otp-form-side">
          <h3>Verify your email</h3>
          <p>Enter the OTP from your registered email id</p>

          <Form className="otp-form" onSubmit={handleSubmit}>
            <div className="otp-inputs">
              {otp.map((data, index) => {
                return (
                  <input
                    type="text"
                    name="otp"
                    maxLength="1"
                    key={index}
                    value={data}
                    className="otp-input"
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>
            <Button className="otp-submit-btn" type="submit">
              Proceed
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default OtpVerification;
