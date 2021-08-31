import { IAuthData } from './../../types';
import { AuthAction } from './../actions/authAction';
import { ActionType } from 'redux/actionTypes';

interface IAuthState {
  data: IAuthData | null;
  status: 'idle' | 'pending' | 'success' | 'error';
  error: null | string;
}

const initialState: IAuthState = {
  data: null,
  status: 'idle',
  error: null,
};

const authReducer = (
  state: IAuthState = initialState,
  action: AuthAction
): IAuthState => {
  switch (action.type) {
    case ActionType.LOGIN_PENDING:
      return {
        data: null,
        status: 'pending',
        error: null,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        data: action.payload,
        status: 'success',
        error: null,
      };
    case ActionType.LOGIN_ERROR:
      return {
        data: null,
        status: 'error',
        error: action.payload,
      };
    case ActionType.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
