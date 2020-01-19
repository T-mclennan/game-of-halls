// reducers.js
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import buildingReducer from "./buildingReducer";
import inputReducer from "./inputReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    building: buildingReducer,
    input: inputReducer
  });
export default createRootReducer;
