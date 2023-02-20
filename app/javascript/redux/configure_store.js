import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import greetings_reducer from './store';

const rootReducer = combineReducers({greetings: greetings_reducer });
const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));

export default store;
