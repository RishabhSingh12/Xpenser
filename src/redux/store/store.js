import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expenses-reducer";
const reducer = combineReducers({
  expenses: expenseReducer,
});

const initialState = {};

const store = createStore(reducer, initialState);
export default store;
