import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="py-5">
          <Col md={3} xs={6}>
            <h3>Download</h3>
            <a href="#"></a>
          </Col>
          <Col md={3} xs={6} className="footer__items">
            <h3>Menu</h3>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Purchasing Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </Col>
          <Col md={3} xs={6} className="footer__items">
            <h3>Contact Us</h3>
            <ul>
              <li>House #8, Road # 14,</li>
              <li>Dhanmondi, Dhaka-1209.</li>
              <li>Email: support@evaly.com.bd</li>
              <li>Contact no: 09638111666</li>
            </ul>
          </Col>
          <Col md={3} xs={6} className="footer__items">
            <h3>Get in Touch</h3>
            <ul className="d-flex">
              <li>
                <a className="facebook" href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a className="youtube" href="#">
                  <IoLogoYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="text-center py-4 border-top">
          <p>
            &copy;{new Date().getFullYear()} E-valy.com Limited. All rights
            reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
