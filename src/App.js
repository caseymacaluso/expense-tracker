import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import { expenses } from "./constants";

const App = () => {
  const addExpenseHandler = expense => {
    console.log("in app.js");
    console.log("app.js ", expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
