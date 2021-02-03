/** @format */
import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { ndxReducer } from './reducers/ndxReducer';
import { selectReducer } from './reducers/selectReducer';

const initialeState = {
  ndx: {
    hasNDX: false,
  },
};

const reducer = combineReducers({
  ndx: ndxReducer,
  select: selectReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialeState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
