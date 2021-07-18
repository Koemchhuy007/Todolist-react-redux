import fetchDataReducer from "./fetchDataReducer";
import crudReducer from "./crudReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    crud: crudReducer,
    fetchData: fetchDataReducer
});
export default rootReducer