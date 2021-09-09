import React from 'react';
import { Col, Row } from 'react-bootstrap';
import captchaBG from 'assets/images/captcha-bg.png';
import { AiOutlineReload } from 'react-icons/ai';

interface ICaptcha {
  captcha: string;
  resetCaptcha: () => string;
}

const Captcha = ({ captcha, resetCaptcha }: ICaptcha) => {
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
            <span className="captcha">{captcha}</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="reload-btn w-100 h-100 bg-dark py-sm-1 my-sm-2 text-white fs-4 rounded d-flex justify-content-center align-items-center">
            <AiOutlineReload onClick={() => resetCaptcha()} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Captcha;
