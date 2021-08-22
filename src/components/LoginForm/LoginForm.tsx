import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const LoginForm = () => {
  return (
    <div className="login__component">
      <Container>
        <div className="login_main py-5">
          <Row>
            <Col
              md={{ span: 4, offset: 4 }}
              className="float-center bg-white p-5 shadow-sm rounded"
            >
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email or Phone</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="dark">LOGIN</Button>
                </div>
              </Form>
              <div className="text-center">
                <p className="py-4">
                  {` Don't have an account?`}
                  <a href="/sign-up" className="text-primary ps-3">
                    Sign up
                  </a>
                </p>
                <a href="/forgot-password" className="text-primary">
                  Forgot Password
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LoginForm;
