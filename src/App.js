import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import { expenses as dummyExpenses } from "./constants";

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = expense => {
    // Clean way to update state based on previous state
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
