import { combineReducers } from 'redux';
import cart from './cartReducer';
const rootReducer = combineReducers({
  cart,
});

export type AppType = ReturnType<typeof rootReducer>;

export default rootReducer;
