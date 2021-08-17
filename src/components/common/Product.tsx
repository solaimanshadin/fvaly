import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IProduct } from 'types';
import imageUrlParser from 'utils/imageUrlParser';
interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { name, image, _id } = product;

  return (
    <Col md={3} className="mb-3 h-100">
      <Link to={`/product/${_id}`}>
        <Card className="h-100">
          <Card.Img variant="top" src={imageUrlParser(image)} />
          <Card.Body>
            <Card.Text>{name}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Product;
