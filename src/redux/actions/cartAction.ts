import { IProduct } from './../../types';
// import { ActionType } from 'redux/actionTypes';

export const addToCart = (payload: IProduct) => {
  return {
    type: 'add_to_cart',
    payload,
  };
};

export const removeFromCart = (payload: string) => {
  return {
    type: 'remove_from_cart',
    payload,
  };
};

export const clearCart = () => {
  return {
    type: 'clear_cart',
  };
};

export type CartAction =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof clearCart>;
