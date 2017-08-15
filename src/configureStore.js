import { createStore } from 'redux'
import reducers from './reducers';

const configureStore = () => {
  let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
};

export default configureStore;