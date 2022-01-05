import { combineReducers, createStore } from 'redux';
import reducerAe from '../reducer';

const rootReducer = combineReducers({ reducerAe });

const store = createStore(rootReducer);

export default store;