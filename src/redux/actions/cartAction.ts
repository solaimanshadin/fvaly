import { IProduct } from '../../types';
import { ActionType } from 'redux/actionTypes';

export const addToCart = (payload: IProduct) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload: IProduct) => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload,
  };
};

// export const clearCart = () => {
//   return {
//     type: ActionType.CLEAR_CART,
//     payload: '',
//   };
// };

export type CartAction =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>;
// | ReturnType<typeof clearCart>;
