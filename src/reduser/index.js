import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import channelDetailReduser from "./channelReduser";
import videosReduser from "./videosReduser";

const rootReduser = combineReducers({
  videos: videosReduser,
  channel: channelDetailReduser,
});

export const store = createStore(
  rootReduser,
  compose(applyMiddleware(thunk), composeWithDevTools())
);
