import React, { useState } from "react";
import "./Expenses.css";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.items.filter(
    item => item.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No Expenses Found...</p>;

  if (filteredItems.length) {
    expensesContent = filteredItems.map(item => (
      <ExpenseItem
        key={item.id}
        date={item.date}
        title={item.title}
        amount={item.amount}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
