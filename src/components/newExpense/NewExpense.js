import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const saveExpenseDataHandler = enteredData => {
    const newEnteredData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newEnteredData);
    console.log("NewExpense - ", newEnteredData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
