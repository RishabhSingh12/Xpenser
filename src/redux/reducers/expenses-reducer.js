import { ACTION_TYPES } from "../action-types/action-types";

const initialList = () => {
  const list = localStorage.getItem("expense-list");
  let expenses = [];
  if (list) {
    expenses = JSON.parse(list);
  }
  return expenses;
};

const initialState = {
  expenseList: initialList(),
  query: "",
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_EXPENSE: {
      localStorage.setItem(
        "expense-list",
        JSON.stringify([...state.expenseList, action.data])
      );
      return {
        ...state,
        expenseList: [...state.expenseList, action.data],
      };
    }
    case ACTION_TYPES.DELETE_EXPENSE: {
      const { data } = action;
      const updatedList = state.expenseList.filter(
        (item) => item.createdAt !== data.createdAt
      );
      localStorage.setItem("expense-list", JSON.stringify(updatedList));

      return {
        ...state,
        expenseList: updatedList,
      };
    }
    case ACTION_TYPES.SEARCH_EXPENSE: {
      const { data } = action;
      return {
        ...state,
        query: data,
      };
    }
    default:
      return state;
  }
};
