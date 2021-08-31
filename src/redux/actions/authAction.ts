import { IAuthData } from './../../types';
import { ActionType } from 'redux/actionTypes';

interface loginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: IAuthData;
}

interface loginPendingAction {
  type: ActionType.LOGIN_PENDING;
}

interface loginErrorAction {
  type: ActionType.LOGIN_ERROR;
  payload: string;
}
interface logoutAction {
  type: ActionType.LOGOUT;
}

export type AuthAction =
  | loginSuccessAction
  | loginPendingAction
  | loginErrorAction
  | logoutAction;
