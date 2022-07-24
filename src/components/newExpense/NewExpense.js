import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = enteredData => {
    const newEnteredData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newEnteredData);
    console.log("NewExpense - ", newEnteredData);
  };

  const toggleFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="new-expense">
      {!showForm ? (
        <button onClick={toggleFormHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
