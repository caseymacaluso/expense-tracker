import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import { expenses } from "./constants";

const App = () => {
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
