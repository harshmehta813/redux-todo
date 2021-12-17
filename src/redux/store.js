import { combineReducers, createStore } from "redux";
// import reducer from "./reducer";
import authReducer from "./auth/reducer";
import appReducer from "./app/reducer";

const rootReducer = combineReducers({ auth: authReducer, app: appReducer });

export const store = createStore(rootReducer);

console.log(store.getState());

// create actions
// create reducer
// create store
// pass store in provider
// select data from store, and
//  ---- pass it to required elements
// dispatch an action depending on user input

// create app and auth folders
// action, actionTypes, reducers
// use combineReducers, to create a root reducer
// refactor components which consume the store  values
// useSelector(state=>state.auth.token)
// useSelector(state=>state.app.todos)
// fix import statements across all actions that we are importing
