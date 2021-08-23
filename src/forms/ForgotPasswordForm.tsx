import Captcha from 'components/common/Captcha';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const ForgotPasswordForm = () => {
  return (
    <div className="forgot__Password__component">
      <Container>
        <div className="forgot_main py-5">
          <Row>
            <Col
              md={{ span: 4, offset: 4 }}
              className="float-center bg-white p-5 shadow-sm rounded"
            >
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Captcha />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <span className="">
                      Enter the exact letters you see in the exact order.
                    </span>
                  </Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="dark">SUBMIT</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPasswordForm;
