import { combineReducers } from "redux";
import buildingReducer from "./buildingReducer";
import inputReducer from "./inputReducer";

export default combineReducers({
  building: buildingReducer,
  input: inputReducer
});
