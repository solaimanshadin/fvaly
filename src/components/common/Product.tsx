import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { IProduct } from 'types';

const Product = ({ product }: { product: IProduct }) => {
  return (
    <Col md={3} className="mb-3">
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
