import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import modalReducer from "./Modal";
import peoplesReducer from "./Peoples";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  modal:modalReducer,
  peoples:peoplesReducer
});

export default reducer;
