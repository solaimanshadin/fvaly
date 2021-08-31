import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from 'redux/actionCreators/authActionCreators';
import { AppState } from 'redux/store';

interface ILoginFormData {
  email: string;
  password: string;
}
const LoginForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState<ILoginFormData>({
    email: '',
    password: '',
  });

  const { data, status, error } = useSelector((state: AppState) => state.auth);

  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (data) {
    history.push('/');
  }
  return (
    <div className="login__component">
      <Container>
        <div className="login_main py-5">
          <Row>
            {status === 'error' && (
              <Col md={{ span: 4, offset: 4 }} className="p-0">
                <Alert variant="primary">{error}</Alert>
              </Col>
            )}
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
                  <Button
                    disabled={status === 'pending'}
                    onClick={() => dispatch(login(formData))}
                    variant="dark"
                  >
                    LOGIN
                  </Button>
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
