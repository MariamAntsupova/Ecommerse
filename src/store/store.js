import { createStore,applyMiddleware  } from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import  ThunkMiddleware  from 'redux-thunk';
const middleware = [ThunkMiddleware];
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware),
  ));

export default store