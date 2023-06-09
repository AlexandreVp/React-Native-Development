import { createContext, useReducer } from "react";

const e = [
  {
    id: "e1",
    description: "exp 1",
    amount: 59.99,
    date: new Date("2023-12-7"),
  },
  {
    id: "e2",
    description: "exp 2",
    amount: 69.99,
    date: new Date("2023-5-20"),
  },
  {
    id: "e3",
    description: "exp 3",
    amount: 79.99,
    date: new Date("2023-05-20"),
  },
  {
    id: "e4",
    description: "exp 4",
    amount: 89.99,
    date: new Date("2023-05-20"),
  },
  {
    id: "e5",
    description: "exp 5",
    amount: 69.99,
    date: new Date("2023-05-20"),
  },
  {
    id: "e6",
    description: "exp 6",
    amount: 79.99,
    date: new Date("2023-05-20"),
  },
  {
    id: "e7",
    description: "exp 7",
    amount: 89.99,
    date: new Date("2023-05-20"),
  },
  {
    id: "e8",
    description: "exp 8",
    amount: 89.99,
    date: new Date("2023-05-20"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseID = state.findIndex(
        (expense) => expense.id === payload.id
      );
      const updatableExpense = state[updatableExpenseID];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseID] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, e);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, expenseData: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
