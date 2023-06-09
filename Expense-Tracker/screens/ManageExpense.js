import React, { useLayoutEffect } from "react";
import { View } from "react-native";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Editar Despesa" : "Adicionar Nova Despesa",
    });
  }, [navigation, isEditing]);

  return <View />;
};

export default ManageExpense;
