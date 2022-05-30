import { ACTION_TYPES } from "../action-types/action-types";

export const addExpense = (data) => {
  //   console.log(data);
  return {
    type: ACTION_TYPES.ADD_EXPENSE,
    data,
  };
};

export const deleteExpense = (data) => {
  return {
    type: ACTION_TYPES.DELETE_EXPENSE,
    data,
  };
};

export const searchExpense = (data) => {
  return {
    type: ACTION_TYPES.SEARCH_EXPENSE,
    data,
  };
};
