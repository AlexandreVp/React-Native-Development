import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const e = [
  {
    id: 'e1',
    description: 'exp 1',
    amount: 59.99,
    date: new Date('2023-12-7')
  },
  {
    id: 'e2',
    description: 'exp 2',
    amount: 69.99,
    date: new Date('2023-5-20')
  },
  {
    id: 'e3',
    description: 'exp 3',
    amount: 79.99,
    date: new Date('2023-05-20')
  },
  {
    id: 'e4',
    description: 'exp 4',
    amount: 89.99,
    date: new Date('2023-05-20')
  },
  {
    id: 'e5',
    description: 'exp 5',
    amount: 69.99,
    date: new Date('2023-05-20')
  },
  {
    id: 'e6',
    description: 'exp 6',
    amount: 79.99,
    date: new Date('2023-05-20')
  },
  {
    id: 'e7',
    description: 'exp 7',
    amount: 89.99,
    date: new Date('2023-05-20')
  },
  {
    id: 'e8',
    description: 'exp 8',
    amount: 89.99,
    date: new Date('2023-05-20')
  }
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={e} periodName={expensesPeriod} />
      <ExpensesList expenses={e} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0
    // backgroundColor: GlobalStyles.colors.gray500
  }
})