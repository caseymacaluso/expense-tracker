import Expenses from "./components/expenses/Expenses";
import { expenses } from "./constants";

const App = () => {
  return <Expenses items={expenses} />;
};

export default App;
