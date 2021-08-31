import { IProduct } from 'types';
import { ActionType } from 'redux/actionTypes';

interface addToCartAction {
  type: ActionType.ADD_TO_CART;
  payload: IProduct;
}

interface removeFromCartAction {
  type: ActionType.REMOVE_FROM_CART;
  payload: string;
}

interface clearCartAction {
  type: ActionType.CLEAR_CART;
}

export type CartAction =
  | addToCartAction
  | removeFromCartAction
  | clearCartAction;
