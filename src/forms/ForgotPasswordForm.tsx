import Captcha from 'components/common/Captcha';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { getCaptcha } from 'services/captchaFunction';

const ForgotPasswordForm = () => {
  const inputCaptcha = document.querySelector(
    '.input-captcha'
  ) as HTMLInputElement;

  let captcha = '';
  let message = '';

  captcha = getCaptcha(captcha);

  const resetCaptcha = (): string => {
    console.log(captcha);
    captcha = '';
    console.log(captcha);
    captcha = getCaptcha(captcha);
    console.log(captcha);
    return captcha;
  };

  // console.log(newCaptcha);

  const matchCaptcha = () => {
    console.log(inputCaptcha);
    // let inputValue = inputCaptcha.value;
    // .split('').join(' ');
    // eslint-disable-next-line eqeqeq
    // if (inputValue == captcha) {
    //   message = `You don't appear to be a robot.`;
    // }
  };

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
                  <Captcha captcha={captcha} resetCaptcha={resetCaptcha} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    <span className="">
                      Enter the exact letters you see in the exact order.
                    </span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="input-captcha"
                    placeholder="Captcha"
                  />
                  {message && <p>{message}</p>}
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="dark" onClick={() => matchCaptcha()}>
                    SUBMIT
                  </Button>
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
