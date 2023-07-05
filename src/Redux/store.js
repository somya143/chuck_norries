import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { chuckReducer } from "./chuckNorrisData/chuckDataReducer";

const rootReducer = combineReducers({
chuckData : chuckReducer
})
const createCompser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer , createCompser(applyMiddleware(thunk)));

export {store}