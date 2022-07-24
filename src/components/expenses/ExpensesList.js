import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = props => {
  if (!props.items.length) {
    return <h2 className="expenses-list__fallback">No Expenses Found...</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map(item => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
