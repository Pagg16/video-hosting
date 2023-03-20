import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import videosReduser from "./videosReduser";

const rootReduser = combineReducers({
  videos: videosReduser,
});

export const store = createStore(
  rootReduser,
  compose(applyMiddleware(thunk), composeWithDevTools())
);
