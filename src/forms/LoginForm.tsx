import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

interface ILoginFormData {
  email: string;
  password: string;
}
const LoginForm = () => {
  const [formData, setFormData] = useState<ILoginFormData>({
    email: '',
    password: '',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    onChange={handleOnChange}
                    type="email"
                    placeholder="Enter Your email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    onChange={handleOnChange}
                    type="password"
                    placeholder="Enter Password"
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="dark">LOGIN</Button>
                </div>
              </Form>
              <div className="login-form-info  text-center">
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
