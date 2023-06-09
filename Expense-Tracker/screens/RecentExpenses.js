import React from 'react';
import { View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

// import { Container } from './styles';

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod={'Últimos 7 dias'} />;
}

export default RecentExpenses;