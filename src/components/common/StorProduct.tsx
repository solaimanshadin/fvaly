import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IStore } from 'types';
import imageUrlParser from 'utils/imageUrlParser';
interface IProp {
  storeProduct: IStore;
}

const StorProduct = ({ storeProduct }: IProp) => {
  const { name, image, _id } = storeProduct;
  return (
    <Col md={3} className="mb-3">
      <Link to={`/store/${_id}`}>
        <Card className="p-3 h-100">
          <Card.Img variant="top" src={imageUrlParser(image)} />
          <Card.Body>
            <Card.Text className="text-center">{name}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default StorProduct;
