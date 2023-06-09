import React, { useContext } from "react";
import { View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

// import { Container } from './styles';

const RecentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod={"Últimos 7 dias"}
      fallBackText={"Não há despesas registradas nos últimos 7 dias."}
    />
  );
};

export default RecentExpenses;
