import React, { useContext } from 'react';
import { View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

// import { Container } from './styles';

const AllExpenses = () => {
  const expensesContext = useContext(ExpensesContext)

  return <ExpensesOutput expenses={expensesContext.expenses} expensesPeriod={'Total'} />;
}

export default AllExpenses;