import { IProduct } from './../../types';
// import { ActionType } from 'redux/actionTypes';
import { CartAction } from 'redux/actions/cartAction';

const cartReducer = (state: IProduct[] = [], action: CartAction) => {
  // switch(action.type) {
  //     case ActionType.ADD_TO_CART:
  //         return [...state, action.payload]
  //     case ActionType.REMOVE_FROM_CART:
  //         // const newState = state.filter(item =>  item._id !== action.payload)
  //         return newState
  //     case ActionType.CLEAR_CART:
  //         return []
  //     default:
  //         return state
  // }
};

export default cartReducer;
