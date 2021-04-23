import { applyMiddleware, combineReducers, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import searchFormReducer from "./searchForm-reducer";
import thunkMiddleware from "redux-thunk";
import imagesListReducer from "./imagesList-reducer";

let reducers = combineReducers({
  imagesList: imagesListReducer,
  searchForm: searchFormReducer,
});

let initialState = {};

let store = createStore(
  reducers,
  localStorage.reduxState ? JSON.parse(localStorage.reduxState) : initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

store.subscribe(
  () => (localStorage.reduxState = JSON.stringify(store.getState()))
);

export default store;
