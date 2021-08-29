import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

export type AppState = ReturnType<typeof rootReducer>;

export default store;
