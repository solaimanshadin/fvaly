import banner1 from 'assets/images/banner1.png';
import banner2 from 'assets/images/banner2.png';
import Categories from 'components/Categories/Categories';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
  return (
    <div>
      <Container>
        <Row className="g-2">
          <Col lg={3}>
            <div
              className="dropdown-menu d-block"
              style={{ position: 'static' }}
            >
              <Categories />
            </div>
          </Col>
          <Col lg={9} className="mt-4">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner2}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
