import React from 'react';
import { Col, Row } from 'react-bootstrap';
import captchaBG from 'assets/images/captcha-bg.png';
import { AiOutlineReload } from 'react-icons/ai';

const Captcha = () => {
  return (
    <div className="captcha__component">
      <Row>
        <Col md={8}>
          <div className="captcha-img">
            <img
              src={captchaBG}
              className="img-fluid rounded"
              alt="captchaBG"
            />
            <span className="captcha">z Z A B Y</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="reload-btn w-100 h-100 bg-dark text-white fs-4 rounded d-flex justify-content-center align-items-center">
            <AiOutlineReload />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Captcha;
