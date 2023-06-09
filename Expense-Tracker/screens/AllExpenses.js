import React from 'react';
import { View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

// import { Container } from './styles';

const AllExpenses = () => {
  return <ExpensesOutput expensesPeriod={'Total'} />;
}

export default AllExpenses;