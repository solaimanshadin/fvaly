import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaRegTimesCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeFromCart } from 'redux/actionCreators/cartAction';
import { IProduct } from 'types';
import imageUrlParser from 'utils/imageUrlParser';

interface IProps {
  item: IProduct;
}
const CartItem = ({ item }: IProps) => {
  const dispatch = useDispatch();
  return (
    <Row>
      <Col md={1}>
        <img className="img-fluid" src={imageUrlParser(item.image)} alt="" />
      </Col>
      <Col>
        <h5 className="mt-4">{item.name}</h5>
      </Col>
      <Col md={2} className="d-flex justify-content-between align-items-center">
        <button
          onClick={() => dispatch(removeFromCart(item._id as string))}
          className="btn"
        >
          <FaRegTimesCircle />
        </button>
        <h6 className="m-0">৳ {item.price}</h6>
      </Col>
    </Row>
  );
};

export default CartItem;
