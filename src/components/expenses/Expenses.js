import React, { useState } from "react";
import "./Expenses.css";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = selectedYear => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
      <ExpenseItem
        date={props.items[3].date}
        title={props.items[3].title}
        amount={props.items[3].amount}
      />
    </Card>
  );
};

export default Expenses;
