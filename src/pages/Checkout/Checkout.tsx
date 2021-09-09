import CartItem from 'components/checkout/CartItem';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from 'redux/actionCreators/cartAction';
import { AppState } from 'redux/store';

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cart);
  const cartTotal = cart.reduce((acc, crr) => acc + crr.price, 0);
  return (
    <div className=" my-3">
      <Container>
        <div className="wrapper bg-white rounded border p-5">
          {cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="mt-5 d-flex flex-column align-items-end border-top pt-5">
            <h2 className="mb-4">Total : ৳ {cartTotal}</h2>
            <button
              onClick={() => dispatch(clearCart())}
              className="btn btn-lg btn-primary"
            >
              Confirm Checkout
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
